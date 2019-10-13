import React, { Component, Fragment } from "react";
import SimpleMap from "./Map";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Row
} from 'reactstrap';
class MyForm extends Component {
  state = {
    title: "",
    mail: "",
    description: "",
    phone: "",
    prize: 0,
    //default
    singlePins: [
      { lat: 52.219075678364284, lng: 21.009613037109375 },
      { lat: 52.2402972077546, lng: 21.003334045410156 },
      { lat: 52.2181941338946, lng: 21.03099822998047 }
    ]
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  getCoordinates = coordinates => {
    this.setState({
      singlePins: coordinates
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let { title, mail, description, phone, prize, singlePins } = this.state;
    console.log(singlePins, "przed");

    let tsinglePins = singlePins.map(el => {
      console.log(el.lat, "lat", el.lng, "lng");
      return { latitude: el.lat, longitude: el.lng };
    });

    console.log(tsinglePins, "po");

    fetch("/api/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: title,
        mail: mail,
        description: description,
        phone: phone,

        singlePins: tsinglePins
      })
    });
  };

  render() {
    return (
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

