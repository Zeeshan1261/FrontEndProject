import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

export default function Firebase() {
  const [showPassword, setShowPassword] = React.useState(false);

  const [user, setUser] = React.useState({
    name: "",
    username: "",
    password: "",
    email: "",
    number: "",
    address: "",
  });
  let name, value;

  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  console.log(user);
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <TextField
          label="Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Name</InputAdornment>
            ),
          }}
        //   value={user.name}
        //   onChange={getUserData}
        />
        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
        ></FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            // onChange={getUserData}
            // value={user.password}
          >
            setPassword
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "setPassword"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="setPassword"
            value={user.password}
            onChange={getUserData}
          />

          <TextField
            type="email"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="enterEmailAddress"
            variant="outlined"
            required
            value={user.email}
            onChange={getUserData}
          />

          <TextField
            type="text"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="Setusername"
            variant="outlined"
            required
            value={user.username}
            onChange={getUserData}
          />

          <TextField
            type="number"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="PhoneNumber"
            variant="outlined"
            required
            value={user.number}
            onChange={getUserData}
          />

          <TextField
            type="text"
            style={{ marginTop: "2rem", marginLeft: "2.5rem", width: "20rem" }}
            id="outlined-basic"
            label="Address"
            variant="outlined"
            required
            value={user.address}
            onChange={getUserData}
          />
        </FormControl>
      </div>
    </Box>
  );
}
