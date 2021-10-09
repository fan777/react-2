import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle className="font-weight-bold">
            Welcome to Silicon Valley's premier dive cafe!
          </CardTitle>
          <CardText>
            We have {snacks ? snacks.length : 0} snacks and {drinks ? drinks.length : 0} drinks! <br />
            <Link to="/add">Suggest a new entry!</Link>
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
