import React, { Component, Fragment } from "react";
import SimpleMap from "./Map";

class Form extends Component {
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Imię:
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <label>
            Email
            <input type="text" name="mail" onChange={this.handleChange} />
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
          <label>
            Phone
            <input type="text" name="phone" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Wyślij" />
        </form>
        <SimpleMap getCoordinates={this.getCoordinates} />
      </Fragment>
    );
  }
}

export default Form;
