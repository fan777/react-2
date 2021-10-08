import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>

      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Inventory
            </h3>
          </CardTitle>
          We have {snacks ? snacks.length : 0} snacks and {drinks ? drinks.length : 0} drinks!
        </CardBody>
      </Card>

    </section>
  );
}

export default Home;
