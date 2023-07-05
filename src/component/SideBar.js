/* eslint-disable no-restricted-globals */
import React from 'react'
import { useNavigate } from 'react-router'
import { HiHome } from 'react-icons/hi'

export default function SideBar() {
  const goto = useNavigate()

  return (
    <div className='sidebar'>
        <p>Nawewe</p>
        <div className='underline'></div>
        <div>
          <li
            onClick={() => goto('/dashboard')}
            className={`link_item ${
              location.pathname === '/dashboard' && 'active_side_menu'
            }`}
          >
            <HiHome className='icon'/> Home
          </li>
          <li
            onClick={() => goto('/my-booking')}
            className={`link_item ${
              location.pathname === '/my-booking' && 'active_side_menu'
            }`}
          >
            <HiHome className='icon'/> My Booking
          </li>
        </div>
    </div>
  )
}
