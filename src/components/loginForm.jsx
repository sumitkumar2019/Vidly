import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  //accessing dom element in 3 steps: 1, 2, 3
  //username = React.createRef(); // 1. creating ref for dom element - but avoid this as much as possible until it is necessary

  state = {
    /** A controlled field element should not be unefined or null only input or empty can be provided*/
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    console.log("call server for data submission");
  };

  // componentDidMount() {
  //   // 2. accessing dom element
  //   //this.username.current.focus();
  // }
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
