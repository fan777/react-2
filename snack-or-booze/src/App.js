import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./FoodMenu";
import Food from "./FoodItem";
import NewFoodForm from './NewFoodForm';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const addFood = async food => {
    const { type, name, description, recipe, serve } = food;
    let newFood = { id: name.replace(/\s+/g, '-').toLowerCase(), name, description, recipe, serve };
    let response = await SnackOrBoozeApi.addFood(type, newFood);
    // console.log(response)
    if (type === "snacks") {
      setSnacks(prevFoods => ([...prevFoods, response]))
    } else if (type === "drinks") {
      setDrinks(prevFoods => ([...prevFoods, response]))
    }
  }

  useEffect(() => {
    async function getFoods() {
      let snacks = await SnackOrBoozeApi.getFood("snacks");
      let drinks = await SnackOrBoozeApi.getFood("drinks");
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getFoods();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu foods={snacks} type="snacks" title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Food items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu foods={drinks} type="drinks" title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Food items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/add">
              <NewFoodForm addFood={addFood} />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
