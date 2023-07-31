import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
export default function ButtonSizes() {
  return (
    <>
      <div className="login-container">
        <h1>Welcome ,Register&Signup to Shoez.com </h1>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="text"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            type="text"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="Surname"
            variant="outlined"
          />
          <TextField
            type="email"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="enterEmailAddress"
            variant="outlined"
          />

          <TextField
            type="text"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="Setusername"
            variant="outlined"
          />
          <TextField
            type="password"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="filled-basic"
            label="setpassword"
            variant="filled"
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
          >
            SignUp
          </Button>
        </Box>
      </div>
    </>
  );
}
