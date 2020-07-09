import React, { Component } from "react";
//import './App.css';
import Toolbar from "./components/Toolbar";
//import { render } from '@testing-library/react';
import MovieList from "./MovieList";
import Table from "./Table";
import Counter from "./counter.jsx";
import AddMovie from "./AddMovie";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { ProtectedRoute } from "./ProtectedRoute";
import Admin from "./Admin";
function App() {
  const Home = () => (
    <div>
      <AddMovie />
      <MovieList />
      <Counter />
    </div>
  );
  return (
    <div>
      <Router>
        <Toolbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/Applayout" component={Admin} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

/*import React from 'react';
import './App.css';
import Nav from './nav';
import About from './About';
import Shope from './Shope';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';

function App () {
  return(
<Router>
 <div className="App">
  
    <Nav />
    <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" component={About}/>
       <Route path="/shope" component={Shope}/>
   </Switch>
   </div>
  </Router>
  

  );
}

const Home =() => (

  <div>
    <h1>Home Page</h1>  
  </div>
)
*/

export default App;
