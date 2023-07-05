import React from 'react'
import { Col, Row } from 'reactstrap'
import SideBar from '../component/SideBar'
import { Outlet } from 'react-router'

export default function AppIndex() {
  return (
    <div className='body'>
      {/* <Row>
        <Col md={2}></Col>
        <Col md={10}>
          <nav className='bg-success'>
            <li></li>
            <li></li>
            <li></li>
          </nav>
        </Col>
      </Row> */}
        <Row>
            <Col md={2}>
                <SideBar />
            </Col>
            <Col md={10}>
                <Col md={12}>
                  <Outlet />
                </Col>
            </Col>
        </Row>
    </div>
  )
}
