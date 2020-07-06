import React, { Component } from "react";
import { Input, Form, Label, FormGroup, Button } from "reactstrap";
import alertifyjs from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alertifyjs.success("Record added to db");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="enter email"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Passsword</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="enter password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="enter description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              placeholder="enter city"
              onChange={this.handleChange}
            >
              <option>Ankara</option>
              <option>İzmir</option>
              <option>Eskişehir</option>
            </Input>
          </FormGroup>
          <Button type="Submit">Save</Button>
        </Form>
      </div>
    );
  }
}
