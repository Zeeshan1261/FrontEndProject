
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
function RenderData({fetch,filter,cart,setCart}) {

const addToCartHandler = (recieve)=> {

}    


return (
<div className='data'>
{fetch.map((data,i)=> {
return(
<Card  className='card-main' >
<Card.Img variant='top' className='product-image hove' alt='shoesPhoto' src={data.image} width={100} height={250}/> 
<Card.Body className='container' key={i}>
<div className='rating-container'>
<h5 className='rating'>Rating</h5>
<p className='rating star'>{data.rating}</p>
</div>
<Card.Title className='product-header'>{data.title}</Card.Title>
{/* <Card.Title className='product-category'>{data.category}s</Card.Title>   */}
<div className='img-container'>
</div>
<Card.Title className='product-price' ><span></span> ${data.price}</Card.Title>
{/* <Card.Title className='product-description'> {data.shoetype}</Card.Title>/ */}
{/* <button className='product-btn' onClick={addToCartHandler(data)}>Add To Cart</button> */}
<Button onClick={addToCartHandler(data)} className='product-btn' variant="primary" disableElevation>
AddToCart
</Button>
</Card.Body>
</Card>
)
})
}  
 
    </div>
  )
}

export default RenderData