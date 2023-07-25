
import React from 'react';
import { Button } from '@mui/material';
function Shoes({fetch}) {

const addToCartHandler = (data)=> {

}    

return(
<div className='data'>
{fetch.map((data,i)=> {
return(
<div className='container' key={i}>
<h1 className='product-header'>{data.title}</h1>
<h3 className='product-category'>{data.category}s</h3>
<div className='product-img-container'>
   <img className='product-image' alt='shoesPhoto' src={data.image} width={300} height={300}/> 
</div>
<h2 className='product-price' ><span></span> ${data.price}</h2>
<h3 className='product-description'> {data.shoetype}</h3>
{/* <button className='product-btn' onClick={addToCartHandler(data)}>Add To Cart</button> */}
<Button onClick={addToCartHandler(data)} className='product-btn' variant="contained" disableElevation>
AddToCart
</Button>
</div>
)
})}
</div>
)
}

export default Shoes;

