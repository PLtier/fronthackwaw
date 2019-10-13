import React, { Component, Fragment } from "react";
import SimpleMap from "./Map";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Row
} from 'reactstrap';

class MyForm extends Component {
  state = { title: "", email: "", description: "", prize: 0, coordinates: [] };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  getCoordinates = coordinates =>{
    this.setState({
      coordinates: coordinates
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch("/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: {
        first_name: this.state.title
      }
    });
    console.log(this.state);
  };

  render() {
    return (
              

      /*
        <form onSubmit={this.handleSubmit}>
          <label>
            Imię:
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <label>
            Email
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Description
            <textarea
              rows="4"
              cols="50"
              name="description"
              onChange={this.handleChange}
            ></textarea>
          </label>
          <label>
            Prize
            <input type="number" name="prize" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Wyślij" />
        </form>
        */
       
<Fragment>
<Container className="App">
<h2>Dodaj nowe zgłoszenie</h2>
<Form className="form">
  
<Row>
  <Col>
    <FormGroup>
      <Label>Nick</Label>
      <Input
        type="text"
        name="title"
        id="title"
        placeholder="nick"
        onChange={this.handleChange}
      />
    </FormGroup>
    <FormGroup>
      <Label>Email</Label>
      <Input
        type="text"
        name="email"
        id="email"
        placeholder="myemail@email.com"
        onChange={this.handleChange}
      />
    </FormGroup>
  </Col>
  <Col>
    <Label>Opis zguby</Label>
    <Input type="textarea" name="description" onChange={this.handleChange} rows="5" cols="50" />
  </Col>    
</Row>
<Row>
  <Col>
    <Label>Nagroda</Label>
    <Input type="number" name="prize" onChange={this.handleChange} />
  </Col>
  <Col>
    <Label>Nie zapomnij zaznaczyć obszaru poszukiwań!</Label>
    <Input type="submit" value="Wyślij" />
  </Col>
</Row>

</Form>
</Container>

<SimpleMap getCoordinates={this.getCoordinates}/>

</Fragment>
    );
  }
}

export default MyForm;
