import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{ useEffect, useState}from 'react';
import RenderData from './RenderData';
import Set from './Set';
function Shoes({fetch}) {

const[copydata,setCopyData] = useState([]);
useEffect(()=> {
setTimeout(()=> {
setCopyData(fetch)
},3000)
},[fetch]);


const changeData = (e)=> {
let getChangeData = e.toLowerCase();
if(getChangeData ===  "") {
setCopyData(fetch)
}else {
let storedData = copydata.filter((ele,i)=> {
return ele.title.toLowerCase().match(getChangeData)
})
setCopyData(storedData)
}

}

return(
<>
<h1 className='header'>A Wide varierty of Shoes with Cheap Prices ,Order Now</h1>
<Form style={{marginLeft:"12rem"}} className="d-flex justify-content-center align-items-center   mt-4 mb-3  col-lg-8" >
<Form.Control style={{padding:"0.5rem"}}
onChange={(e)=> changeData(e.target.value)}
// onBeforeInput={}
onFocus={(e)=>changeData(e.target.value)}
type="text"
placeholder="Search Shoes"
className="me-2"
aria-label="Search"
/>
<Button  className='btn-text-light ' variant="outline-success">Search</Button>
</Form>
{copydata && copydata.length ?  <RenderData  fetch={copydata}/>:<Set fetch={fetch}/>}
{/* <RenderData fetch={copydata}/> */}
</>
)
}
export default Shoes;