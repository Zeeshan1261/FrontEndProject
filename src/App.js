import axios from 'axios';
import './App.css';
import { useState,useEffect } from 'react';
import Shoes from './Components/Shoes';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import Navbars from './Components/Navbar';


function App() {


const [fetch,setFetch] = useState([]);

useEffect(()=> {
axios.get('http://localhost:3001/posts')
.then((response)=> setFetch(response.data))
},[])

console.log(fetch);

return (
<>
<Navbars/>
<BrowserRouter>
<Routes >
<Route  path='/' element={<Shoes fetch={fetch}/>}/>
<Route path='/cart' element={<Cart/>}/>
</Routes>
</BrowserRouter>
</>
);
}

export default App;
