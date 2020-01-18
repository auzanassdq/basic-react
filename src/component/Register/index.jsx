import React, { useState, useEffect } from "react";
import axios from 'axios'

// Component Function
function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [data, setData] = useState([])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos")
    .then(result => {
      // console.log(result)
      setData(
        result.data
      )
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(user)
    console.log(data)
  }

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Register