import React, { useState } from 'react'
import NavBar from '../NavBar'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { Button, Col, Row, Toast, ToastBody, ToastHeader } from 'reactstrap'
import { BodyCards } from './CardsComponent/BodyCards'
import RadioCard from './CardsComponent/RadioCard'

export default function OngoingTripPass() {
  const goto = useNavigate()
  const [dispaly, setDisplay] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const toggleToast = () => {
    setIsOpen(!isOpen);
    setDisplay(false)
  }

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
            <h2>You have an ongoing trip. The driver is yet to start or get to you</h2>
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
        {dispaly ? 
          <>
          <p style={{ fontWeight: 'lighter', marginTop: 30, textAlign: "center" }}>
            As a passenger, confirming you are with or without the started drive helpeds
          </p>
          <Col md={12} className="mt-4 mb-5">
            <center>
              <Button 
                className="bg-success mb-5" 
                size="lg"
                onClick={toggleToast}
              >
                Chart and Alert driver
              </Button>
            </center>
          </Col>
          </> : ''
        }
        <Row style={{marginBottom :70, marginLeft: 10}} className='m-0 p-0 mb-5' >
            <Toast isOpen={isOpen} style={{width: '97%', marginTop: 30}}>
                <ToastHeader toggle={toggleToast}>
                  <h3>the passeger will not see this </h3>
                  <center>
                    <p>
                      the driver will set how to confirm from the driving plan set up. If the driver set QR,  then the QR
                      shows. If driver set push notification/email, then it shows
                    </p>
                  </center>
                </ToastHeader>
                <ToastBody>
                    <Row>
                        <Col md={6} onClick={() => goto('/QR_confirm')}>
                            <RadioCard 
                                label= 'Use QR code'
                                description= 'tell the passenger to open their hone and show their QR code'
                            />
                        </Col>
                        <Col md={6} onClick={toggleToast}>
                            <RadioCard 
                                label= 'Use push notification/Email'
                                description= 'Send push notification/Email to passengers, then tell passengers to open app'
                            />
                        </Col>
                        <Col md={12} className="mt-4">
                            <center>
                                <Button className="bg-success" size="lg">
                                    Proceed
                                </Button>
                            </center>
                        </Col>
                    </Row>
                </ToastBody>
            </Toast>
        </Row>
    </div>
  )
}
