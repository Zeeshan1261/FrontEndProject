import React,{useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { useParams } from "react-router-dom";
// import Signup from '../Forms/Signup'
function RenderData({ fetch, filter,cart,setCart,setGet}) {


const [addedItem,setAddedItem] = useState([]);



const cartItems = (recieve)=> {
setAddedItem((prev)=> [...prev,recieve])
console.log(addedItem);
};


// const {id} = useParams();
const productDetailsHandler = ()=> {
// alert('loading product details')
}
// setGet(addedItem)

  return (
    <div className="data">
{/* <Cart addedItem={{addedItem}} /> */}
      {fetch.map((data, i) => {
        return (
          <Card className="card-main " onClick={()=> productDetailsHandler()}  >
            <Card.Img
              variant="top"
              className="product-image hove"
              alt="shoesPhoto"
              src={data.image}
              width={50}
              height={250}
            />

            <Card.Body className="container" key={i}>
              <div className="rating-container">
                <h5 className="rating">Rating</h5>
                <p className="rating star">{data.rating}</p>
              </div>
              <Card.Title className="product-header">{data.title}</Card.Title>
              {/* <Card.Title className='product-category'>{data.category}s</Card.Title>   */}
              <div className="img-container"></div>
              <Card.Title className="product-price">
                <span></span> ${data.price}
              </Card.Title>
              {/* <Card.Title className='product-description'> {data.shoetype}</Card.Title>/ */}
              {/* <button className='product-btn' onClick={addToCartHandler(data)}>Add To Cart</button> */}
              <Button
                className="product-btn"
                variant="primary"
                disableElevation
                onClick={()=> cartItems(data)}
              >
                AddToCart
{/* 8:45 
9:00AM 
1:00PM 
1PM TO 2PM LUNCH
2:00PM TO 7PM 
*/}
              </Button>


            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
export default RenderData;