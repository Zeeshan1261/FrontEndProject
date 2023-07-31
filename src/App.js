import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Shoes from "./Components/Shoes";
import Cart from "./Components/Cart/Cart";
import Navbars from "./Components/navbar/Navbars";
import Login from "./Components/Forms/Login";
import Signup from "./Components/Forms/Signup";
import Footer from "./Components/Footer/Footer";

function App() {
  const [fetch, setFetch] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((response) => setFetch(response.data));
  }, []);

  console.log(fetch);
  const [cart, setCart] = useState();
const [get,setGet] = useState([]);
console.log(get);

  return (
    <>
      <Navbars />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Shoes  fetch={fetch} cart={cart} setCart={setCart}  setGet={setGet}/>}
          />

          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} get={get} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
