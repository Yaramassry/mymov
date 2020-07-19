import React, { Component } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar.css";
import login from "./login/login.css";
import auth from "./auth";
import { Route, Redirect, Router } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Admin from "./Admin";
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';



class Login extends Component {
  handleSubmit = (event) => {
   // event.preventDefault();
    const password = document.getElementById("password");
    //const form= document.getElementById('form');
    const errorElement = document.getElementById("error");
    const name = document.getElementById("name");

    let messages = [];

  if (name.value === "yara" && password.value === "123456789") {
      auth.login();
      console.log("yy");
      messages.push("hi admin!");
      this.props.history.push("/Applayout");
    }

    if (name.value === "" || name.value == null) {
      console.log("jj");
      messages.push("Enter your name please!!");
    }

    if (password.value.length <= 6) {
      console.log("6//");
      messages.push("password must longer than 6 characters!");
    }

    if (password.value.length > 15) {
      messages.push("password must shorter than 15 characters!");
    }

    if (messages.length > 0) {
      event.preventDefault();
      errorElement.innerText = messages.join(", ");
    }
  };

  render() {
    return (
     <div>
       
      <div className="loginbox">
        <form method="GET" id="form">
          <div id="error"></div>
          <h1> Login Here</h1>
          <p for="name"> Username :</p>
          <input
            id="name"
            type="text"
            name=""
            placeholder="Enter Username"
            required
          />
          <p for="password"> Password :</p>
          <input
            id="password"
            type="password"
            name=""
            placeholder="Enter Password"
            required
          />
          <button className="button" type="submit" onClick={this.handleSubmit}>
            Login
          </button>
          <br />
          <a href="#"> Lost Your Password </a>
          <br />
          <a href="#"> Create Account</a>
        </form>
      </div>

     
     
     
      
    
       

      <div className="responsive">
        <img src="data:image/png;base64,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" className="img-responsive" width="100%"  height="500" />
        </div>
        




        </div> 
        
    );
  }
}
export default Login;

/*
<script>
    var name = document.getElementById("name");
    name.addEventListener('focus',function() {
        alert("Type your name");
    });

</script>*/
