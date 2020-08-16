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
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-bootstrap';


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

     
     
     
      
      <div className="container-fluid">
        <div className="row">

       

      <div className="col-sm-4">
             <img  src= {require('./Photos/game.jpg')} className="img-responsive"  width="90%" /></div>
                    
       <div className="col-sm-4">
             <img  src={require('./Photos/merage.jpg')}  className="img-responsive" width="90%" /> </div>
        <div className="col-sm-4">
             <img  src={require('./Photos/titanic.jpg')}  className="img-responsive" width="90%" /> </div>
        

</div>
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
