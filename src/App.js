import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

// Import component
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Register from "./component/Register";

// Component get props
function Home(props) {
  return <h1>Welcome to {props.name} </h1>;
}

// Component with arrow function
const About = () => (
  <h1>About</h1>
)

function Users() {
  return <h1>Users</h1>;
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Switch>
        <Route exact path="/">
          {/* Sending props name */}
          <Home name="Nurul Fikri" />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/login">
          {/* component class*/}
          <Login />
        </Route>
        <Route path="/register">
          {/* component function*/}
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;