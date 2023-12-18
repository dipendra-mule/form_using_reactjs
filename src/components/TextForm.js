import React, { useState } from 'react'

export default function (props) {
    const [text, setText] = useState('Enter your text')
    const toUpCase = () => {
        setText(text.toUpperCase())
        props.showAlert("success", "uppercased")
    }
    const toLrCase = () => {
        setText(text.toLowerCase())
        props.showAlert("success", "lowercased")
    }
    const handleChange = (event) => {
        setText(event.target.value)
    }
  return (
      <main style={props.mode}>
        
       <div>
        <textarea style={props.mode} id="myBox" value={text}  onChange={handleChange} cols={50} rows={15}></textarea>
       </div>
       <button onClick={toUpCase}>Uppercase</button><br></br>
       <button onClick={toLrCase}>Lowercase</button><br></br>
       <div>
           <h2>Your text summary</h2>
           <p><b> {text.split(" ").length}</b> words <b>{text.length} </b>letters</p>
       </div>
      </main>
   
  )
}
