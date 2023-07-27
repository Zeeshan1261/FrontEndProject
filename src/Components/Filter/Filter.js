
import React from 'react'

function Filter({filterValueSelected}) {
  
  const optionFilter = (e)=> {
filterValueSelected(e.target.value)
  }

  return (
    <div>
<select onChange={optionFilter} className='selector'>
<option>Categories</option>
<option>PartyWare</option>
<option>Casual</option>
<option>GYM</option>

</select>
        
    </div>
  )
}

export default Filter