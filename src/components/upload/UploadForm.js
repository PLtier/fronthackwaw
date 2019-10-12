import React, { Component } from "react";

class Form extends Component {
  state = { title: "", email: "", description: "", prize: 0 };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

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
    );
  }
}

export default Form;
