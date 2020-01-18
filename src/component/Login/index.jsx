import React, { Component } from "react";
import axios from "axios"

// Component Class
class Home extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      todos: []
    };
  }

  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/todos")
    .then(result => {
      // console.log(result)
      this.setState({
        todos: result.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    console.log(this.state)
    this.setState({
      email: "",
      password: ""
    })
  }

  handleChange = (event) => {
    this.setState({
     [event.target.name]: event.target.value
    })

    console.log(this.state)
  }

  render() {

    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}
        >
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <ul>
          {this.state.todos.map(item => {
            return (
              <li key={item.id}>{item.title}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
