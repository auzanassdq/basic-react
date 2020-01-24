import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom"
import axios from "axios";

function Users({history, match}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // GET data using axios
    axios
      .get("https://reqres.in/api/users")
      .then(result => {
        setUsers(result.data.data);
        console.log(result.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleClick = id => {
    // add params id on route /users, for DetailUser
    history.push(`${match.url}/${id}`)
  }

  return (
    <div>
      <h1>Data Users</h1>
      <h4>Click user to get detail</h4>
      <ul>
        {users.map((item, index) => (
          <li key={index} onClick={() => handleClick(item.id)}>{item.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default withRouter(Users)
