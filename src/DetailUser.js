import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailUser() {
  // get id from params
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    // GET user by id
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then(result => {
        setUser(result.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  console.log(user);

  return (
    <div>
      <h1>
        Hallo {user.first_name} {user.last_name}
      </h1>
      <span>{user.email}</span>
    </div>
  );
}
