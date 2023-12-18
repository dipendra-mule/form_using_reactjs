import React from 'react'

function Navbar(props) {
  return (
    <div style={props.mode}>
      <h1>
        {props.title} 
      </h1>
      <div>
            <button  onClick={props.toggleMode}>@</button>
            <button  onClick={props.toggleMode1}>@</button>
            
        </div>
      </div>
  )
}

export default Navbar