import React from 'react'
import NavBar from '../NavBar'
import { IoIosArrowBack } from 'react-icons/io'
import { Button, Col, Row } from 'reactstrap'
import { BodyCards } from './CardsComponent/BodyCards'
import { useNavigate } from 'react-router'
import img1 from '../Image/img5.fa08ce6ef02281466c52.png'

export default function PushNotification() {
const goto = useNavigate()

  return (
    <div className='body_div'>
        <NavBar componentName="Push Notification"/>
        <div style={{width: '100%'}}>
        <div style={{paddingLeft: 20}}>
            <button 
                className='backward_arrow'
                onClick={() => goto('#')}
            ><IoIosArrowBack /> Back</button>
        </div>
            <center>
                <img 
                    src={img1} 
                    alt='space' 
                    className='header_image'
                />
            </center>
        </div>
        <div style={{padding: 20}}>
            <h2>You have an ongoing trip. The driver confirms you joined the trip</h2>
        </div>
        <Row style={{marginBottom: 70}} className='m-0 p-0'>
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
        <p style={{ fontWeight: 'lighter', marginTop: 30, textAlign: "center" }}>
            As a passenger, confirming you are with or without the started drive helpeds
          </p>
          <Col md={12} className="mt-4 mb-5">
            <center>
              <Button 
                className="bg-success mb-5" 
                size="lg"
                onClick={() => goto('/end_trip')}
              >
                Confirm
              </Button>
            </center>
          </Col>
    </div>
  )
}
