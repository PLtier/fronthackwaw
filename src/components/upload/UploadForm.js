import React, { Component, Fragment } from "react";
import SimpleMap from "./Map";

class Form extends Component {
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
      <Fragment>
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
        <SimpleMap getCoordinates={this.getCoordinates}/>
      </Fragment>
    );
  }
}

export default Form;
