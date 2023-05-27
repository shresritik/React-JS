import React from "react";
import "./admin.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user") === process.env.REACT_APP_USERNAME) {
      history.push("/admin/user");
    }
  }, [history]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username === process.env.REACT_APP_USERNAME &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      localStorage.setItem("user", username);
      history.push("/admin/user");
    } else {
      alert("Invalid Username or password");
    }
  };
  return (
    <form className="form-bg card">
      <div className="form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          onClick={handleLogin}
          className="btn btn-secondary w-25"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
