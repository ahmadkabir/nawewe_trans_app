import React from 'react'
import { Label } from 'reactstrap'

export default function InputComponent(props) {
  return (
    <div style={{display: "flex", flexDirection: 'column'}}>
        {props.label&&
        <Label className='Label mt-2' style={{fontWeight: 'lighter'}}> 
        {props.label} {props.required&&<span className='text-danger'>*</span>}</Label>}
        <input {...props} className= "app_input"/>
    </div>
  )
}

