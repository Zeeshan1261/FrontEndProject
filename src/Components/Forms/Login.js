import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";



export default function ButtonSizes({ data }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  console.log(data);


  const loginHandler = () => {
    if (userName === "" && password === "") {
      return alert("Please enter your username and password");
    } else if (userName === data.username && password === data.password) {
      return alert("login sucessfully");
    }
    else return alert('please enter valid data')
  };

  return (
    <>
      <div className="login-container ">
        <h1>Login to Shoes.com </h1>
        <Box className="form"
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="email"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(e) => setUserName(e.target.value)}
            className="login-input"
          />
          <TextField
            type="password"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="filled-basic"
            label="Password"
            variant="filled"
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            
          />
          <Button
            style={{
              marginTop: "1rem",
              marginLeft: "2rem",
              marginBottom: "2rem",
              width: "10 rem",
            }}
            variant="contained"
            size="large"
            // onClick={() => loginHandler()}
            onClick={() => loginHandler()}
            className="lgn-btn"
          >
            LOGIN
          </Button>
        </Box>
        <h1 style={{ fontFamily: "sans-serif",fontSize:"20px" }}>
          New to Shoez.com,Register
          <span style={{ fontSize: "5rem" }}>↓</span>
        </h1>
        <Link to={"/signup"}>
          <Button
            style={{
              marginTop: "1rem",
              marginLeft: "5rem",
              marginBottom: "2rem",
              width: "10 rem",
            }}
            variant="contained"
            size="large"
          >
            Signup
          </Button>
        </Link>
      </div>

      {/* <Box sx={{ '& button': { m: 1 } }}> */}
      {/* </Box> */}
    </>
  );
}
