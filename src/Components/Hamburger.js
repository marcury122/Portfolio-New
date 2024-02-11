import React from 'react'
import '../App.css'

const Hamburger = () => {

  function handleClick(){}

  return (
    <div class="hamburger" onClick={handleClick}>
          <div class="ham"><img src="ham.png" alt="" width="40px" /></div>
    </div>
  )
}

export default Hamburger