
import React from 'react'
function Filter() {
  
function onFilterValueChanged(event) {
    console.log(event.target.value);
}
return (

<div  className='selector'>
<select onChange={onFilterValueChanged}>
<option>Categories</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>

</select>

    </div>
  )
}

export default Filter