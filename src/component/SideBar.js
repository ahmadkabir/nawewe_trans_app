import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { FiSidebar } from 'react-icons/fi'
import { Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap'

export default function SideBar() {
  const navigate = useNavigate()
  const [position, setPosition] = useState(null)
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sidebarElement = document.querySelector('.sidebar')
      if (sidebarElement) {
        const rect = sidebarElement.getBoundingClientRect()
        setPosition({ top: rect.top, left: rect.left })
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  console.log('Sidebar Position:', position)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <p style={{ fontStyle: 'italic' }}><b>Nawewe</b></p>
          </Col>
          <Col className='cursor-pointer'>
            <button className="toggle-button border-0 bg-transparent" onClick={toggleSidebar}>
              <FiSidebar /> {isSidebarOpen}
            </button>
          </Col>
        </Row>
      </Container>
      <div className='underline'></div>
      <Nav vertical>
        <NavItem>
          <NavLink
            onClick={() => navigate('/dashboard')}
            isActive={(match, location) => location.pathname === '/dashboard'}
          >
            <HiHome className='icon' /> Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => navigate('/my-booking')}
            isActive={(match, location) => location.pathname === '/my-booking'}
          >
            <HiHome className='icon' /> My Booking
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}
