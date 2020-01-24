import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

// Import component
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Register from "./component/Register";
import Users from './Users'
import DetailUser from "./DetailUser";

// Component with arrow function
const About = () => (
  <h1>About</h1>
)

// Component woth props
function Home(props) {
return <h1>Welcome {props.name}</h1>;
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
        <Route exact path="/users">
          <Users />
        </Route>
        {/* Detail page with params id */}
        <Route path="/users/:id">
          <DetailUser />
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