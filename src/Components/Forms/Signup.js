import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function ButtonSizes() {
  const [name, setName] = useState();
  const [sirname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [number, setNumber] = useState();
  const [address, setAddress] = useState();

  const navigate = useNavigate();



  const handleFormSubmit = (e) => {


    let object = { name, sirname, email, username, password, number, address };
    console.log(object);

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(object),
    })
      .then((response) => {
        alert("registered successfully");
      })
      .catch((err) => {
        alert(`${err.message} to Register  `);
      });
    navigate("/login");
  ;
}
  return (
    <>
      <div className="login-container">
        

        <h1>Welcome ,Register&Signup to Shoez.com </h1>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
        >
          <TextField
            type="text"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setSurname(e.target.value)}
            required
          />
          <TextField
            type="text"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="Surname"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            type="email"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="enterEmailAddress"
            variant="outlined"
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <TextField
            type="text"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="Setusername"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            type="password"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="filled-basic"
            label="setpassword"
            variant="filled"
            onChange={(e) => setNumber(e.target.value)}
            required
          />

          <TextField
            type="number"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="PhoneNumber"
            variant="outlined"
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <TextField
            type="text"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="Address"
            variant="outlined"
            required
          />
          <Button
            style={{
              marginTop: "1rem",
              marginLeft: "5rem",
              marginBottom: "2rem",
              width: "10 rem",
            }}
            variant="contained"
            size="large"
            onClick={() => handleFormSubmit()}
          >
            SignUp
          </Button>
        </Box>
      </div>
    </>
  );
}