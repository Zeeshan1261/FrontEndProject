import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import RenderData from "./Data/RenderData";
import Set from "./skeleton/Set";
import Carousels from "./Carousel/Carousels";
import Filter from "./Filter/Filter";
import Button from "./Buttons/Button";
function Shoes({ fetch,addToCart ,setGet}) {


const [copydata, setCopyData] = useState([]);

const [selectedFilter, setSelectedFilter] = useState("Categories");

let filteredProduct = fetch.filter((product) => {
    if (selectedFilter === "PartyWare") {
      return product.shoetype === "Partyware";
    } else if (selectedFilter === "Casual") {
      return product.shoetype === "Casual";
    } else if (selectedFilter === "GYM") {
      return product.shoetype === "gym";
    } else {
      return product;
    }
  });
  // let filteredProduct = filterSelected.filter()
  useEffect(() => {
    setTimeout(() => {
      setCopyData(fetch);
    }, 3000);
  }, [fetch]);

  const changeData = (e) => {
    let getChangeData = e.toLowerCase();
    if (getChangeData === "") {
      setCopyData(fetch);
    } else {
      let storedData = copydata.filter((ele, i) => {
        return ele.title.toLowerCase().match(getChangeData);
      });
      setCopyData(storedData);
    }
  };

  const filterValueSelected = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  return (
    <>
      <Carousels />
      <h1 className="header">
        A Wide varierty of Shoes with Cheap Prices ,Order Now
      </h1>
      <Button />

      <Form
        style={{ marginLeft: "12rem" }}
        className="d-flex justify-content-center align-items-center   mt-4 mb-3  col-lg-8"
      >
        <Form.Control
          style={{ padding: "0.5rem" }}
          onChange={(e) => changeData(e.target.value)}
          // onBeforeInput={}
          onFocus={(e) => changeData(e.target.value)}
          type="text"
          placeholder="Search Shoes"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <Filter filterValueSelected={filterValueSelected} />
      {copydata && copydata.length ? (
        <RenderData
          
          filter={filteredProduct}
          fetch={copydata} 
          addTocart={addToCart}
          setGet={setGet}
        />
      ) : (
        <Set fetch={fetch} />
      )}

      {/* <RenderData fetch={copydata}/> */}
    </>
  );
}

export default Shoes;


