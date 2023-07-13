import React from 'react'
import NavBar from '../NavBar'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { BodyCards } from './CardsComponent/BodyCards'
import { Button, Col, Row } from 'reactstrap'

export default function ConfirmQR() {
    const goto = useNavigate()

  return (
    <div>
        <NavBar componentName="Passenger Ongoing Trip"/>
        <div style={{paddingLeft: 20}}>
            <button 
                className='backward_arrow'
                onClick={() => goto('/dashboard')}
            ><IoIosArrowBack /> Back</button>
        </div>
        <div style={{padding: 20}}>
            <h2>You are about to start trip. Show driver your QR code</h2>
        </div>
        <Row style={{marginBottom: 70}}>
          <Col md={4}>
            <BodyCards 
              name= 'Ololade (KH 435 AA)'
              time= '13:30'
              vehicleType= 'Black telsa'
              fare= 'NGN 250 per person'
              para= 'High park Cambrige to Sean unity park Oxford'
              head= 'Yunus, Umar, Kehinde, Caleb are on board. Tap each user to view info'
            />
          </Col>
        </Row>
        <p style={{ fontWeight: 'lighter', marginTop: -15, textAlign: "center" }}>
            As a passenger, confirming you are with or without the started drive helpeds
          </p>
          <Col md={12} className="mt-4 mb-5">
            <center>
              <Button 
                className="bg-success mb-5" 
                size="lg"
                onClick={() => goto('/QR_code')}
              >
                Show QR
              </Button>
            </center>
          </Col>
    </div>
  )
}
