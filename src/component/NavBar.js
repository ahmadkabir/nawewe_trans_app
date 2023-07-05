import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import {  FaUserCircle } from 'react-icons/fa'

export default function NavBar({ componentName }) {
  return (
    <div>
        <nav className='navbar_div'>
            <div>
                <div style={{display: 'flex'}}>
                    <AiFillHome />
                    <p className='para'> / {componentName}</p>
                </div>
                <p className='para2'>{componentName}</p>
            </div>
            <div style={{display: 'flex'}}>
                <div >
                    <div className='input_div'>
                        <FiSearch />
                        <input 
                            type='text'
                            placeholder='Type Here....'
                            className='input'
                        />   
                    </div>
                </div>
                <div style={{display: 'flex', marginTop: 10, marginLeft: 10, color:'#404040', cursor: 'pointer'}}>
                    <FaUserCircle  style={{marginRight: 5, marginTop: 3}}/>
                    <p className='para3'>Sign In</p>
                </div>
            </div>
        </nav>
    </div>
  )
}
