import React from 'react'

function Alert(props) {
  return (
    props.alert && <div style={props.mode}>
        <p><strong>{props.alert.type}</strong>:{props.alert.msg}</p>
    </div>
  )
}

export default Alert