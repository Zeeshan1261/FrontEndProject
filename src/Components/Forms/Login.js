import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
export default function ButtonSizes() {

return (
<>
<div className='login-container'>
<h1>Login to Shoez.com </h1>
<Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off" >
<TextField  type='email' style={{marginTop:"2rem",marginLeft:"2.5rem",width:"20rem"}} id="outlined-basic" label="Username" variant="outlined" />
<TextField type='password' style={{marginTop:"2rem",marginLeft:"2.5rem",width:"20rem"}}  id="filled-basic" label="Password" variant="filled" />
<Button  style={{marginTop:"1rem",marginLeft:"5rem",marginBottom:"2rem",width:"10 rem"}} variant="contained" size="large">LOGIN</Button>
</Box>
<h1 style={{fontFamily:"sans-serif"}}>New to Shoez.com,Register 
<span style={{fontSize:"5rem"}}>↓</span>
</h1>
<Link to={'/signup'}>
<Button  style={{marginTop:"1rem",marginLeft:"5rem",marginBottom:"2rem",width:"10 rem"}} variant="contained" size="large">
Signup
</Button>
</Link>

</div>

{/* <Box sx={{ '& button': { m: 1 } }}> */}
{/* </Box> */}
</>
  );
}
