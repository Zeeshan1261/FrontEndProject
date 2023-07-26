import axios from 'axios';
import './App.css';
import { useState,useEffect } from 'react';
import Shoes from './Components/Shoes';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Navbars from './Components/navbar/Navbars';
import Login from './Components/Forms/Login';
import Signup from './Components/Forms/Signup';
function App() {

const [fetch,setFetch] = useState([]);

useEffect(()=> {
axios.get('http://localhost:3001/posts')
.then((response)=> setFetch(response.data))
},[])

console.log(fetch);

return (
<>
<Navbars  />
{/* <Search/> */}
<BrowserRouter >
<Routes >
<Route  path='/' element={<Shoes fetch={fetch}/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
</Routes>
</BrowserRouter>
</>
);
}

export default App;
