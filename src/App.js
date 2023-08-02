import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import axios from "axios";
import Shoes from "./Components/Shoes";
import Cart from "./Components/Cart/Cart";
import Navbars from "./Components/navbar/Navbars";
import Login from "./Components/Forms/Login";
import Signup from "./Components/Forms/Signup";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

import Firebase from "./Components/Forms/Firebase";

function App() {


  const [fetch, setFetch] = useState([]);
  const [data,setData] = useState([])
  useEffect(() => {
  axios.get("http://localhost:3001/posts")
  .then((response) => setFetch(response.data));
  }, []);

console.log(fetch);

useEffect(()=> {
  axios.get("http://localhost:3001/users")
  .then((response)=> setData(response.data))
},[])


return (
    <>
      <Navbars />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Shoes  fetch={fetch}   />}
          />

          <Route
            path="/cart"
            element={<Cart   />}
          />
          
          <Route path="/login" element={<Login data={data} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productdetails/:id" element={<ProductDetails/>} fetch={fetch} />
          <Route path="/firebase" element={<Firebase/>}/>
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
