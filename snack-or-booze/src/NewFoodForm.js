import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';

const NewFoodForm = ({ addFood }) => {
  const [formData, setFormData] = useState({
    type: "snack",
    name: "",
    description: "",
    recipe: "",
    serve: ""
  });
  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    addFood({ ...formData });
    history.push('/')
  }

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle className="font-weight-bold">
            Suggest a Recipe!
          </CardTitle>

        </CardBody>
      </Card>
      <Form className="clearfix" onSubmit={handleSubmit}>
        <FormGroup row>
          <Label sm={2} for="type">Type</Label>
          <Col sm={10}>
            <Input type="select" name="type" id="type" value={formData.type} onChange={handleChange}>
              <option value={"snack"} >Snack</option>
              <option value={"drink"}>Drink</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} for="name">Name</Label>
          <Col sm={10}>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="What is this food called?"
              value={formData.name} onChange={handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} for="description">Blurb</Label>
          <Col sm={10}>
            <Input
              id="description"
              type="text"
              name="description"
              placeholder="Provide a short description of the food"
              value={formData.description} onChange={handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} for="recipe">Recipe</Label>
          <Col sm={10}>
            <Input
              id="recipe"
              type="text"
              name="recipe"
              placeholder="How is this made?"
              value={formData.recipe} onChange={handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} for="serve">Serve</Label>
          <Col sm={10}>
            <Input
              id="serve"
              type="text"
              name="serve"
              placeholder="How is this served?"
              value={formData.serve} onChange={handleChange} />
          </Col>
        </FormGroup>
        <Button color="primary" className="float-right">Submit</Button>
      </Form>
    </section>
  )
}

export default NewFoodForm;