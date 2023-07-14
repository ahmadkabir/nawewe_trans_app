import React, { useState } from 'react'
import NavBar from '../NavBar'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { Button, Col, Row, Toast, ToastBody, ToastHeader } from 'reactstrap'
import { BodyCards } from './CardsComponent/BodyCards'
import RadioCard from './CardsComponent/RadioCard'

export default function OngoingTrip() {
  const goto = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

    const toggleToast = () => {
        setIsOpen(!isOpen);
        setIsOpen1(!isOpen1)
        setIsOpen2(false)
        setIsOpen3(false)
    };

    const toggleToast1 = () => {
        setIsOpen(false);
        setIsOpen3(false)
        setIsOpen2(!isOpen2)
    };

    const toggleToast2 = () => {
        setIsOpen(false);
        setIsOpen2(false)
        setIsOpen3(!isOpen3)
    };

  return (
    <div className='body_div'>
        <NavBar componentName="Ongoing Trip"/>
        <div style={{paddingLeft: 20}}>
            <button 
                className='backward_arrow'
                onClick={() => goto('/dashboard')}
            ><IoIosArrowBack /> Back</button>
        </div>
        <div style={{padding: 20}}>
            <h2>You have an ongoing trip. You need to start trip first</h2>
        </div>
        <Row style={{marginBottom: 70}} className='m-0 p-0'>
          <Col md={4} className='mb-4'>
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
        {isOpen1 ? 
          <>
          <p style={{ fontWeight: 'lighter' }}>
            As the driver, starting the trip and starting for 
            each passenger ensure they on the ride with you which gives more quarantee to payment
            by end of trip
          </p>
        <Col md={12} className="mt-4">
          <center>
            <Button 
              className="bg-success mb-2" 
              size="lg"
              onClick={toggleToast}
            >
              start trip
            </Button>
          </center>
        </Col>
        </> : ''
        }
        <Row style={{marginBottom :70, marginLeft: 10}} className='m-0 p-0 mb-5' >
            <Toast isOpen={isOpen} style={{width: '97%', marginTop: 30}}>
                <ToastHeader toggle={toggleToast}>
                    <h3>Are you show you want to start this trip</h3>
                </ToastHeader>
                <ToastBody>
                  <p>
                    As a driver, starting the trip means all your passengersare notified 
                    you are to take off to meet them and take the journey
                  </p>
                    <Row>
                        <Col md={6} onClick={toggleToast1}>
                            <RadioCard 
                                label= 'Yes, start trip'
                                description= 'As the driver, the car is about to move. As passenger, you are in car'
                            />
                        </Col>
                        <Col md={6} onClick={() => {
                          setIsOpen1(true);
                          setIsOpen(false)
                        }}>
                            <RadioCard 
                                label= 'No. Not ready'
                                description= 'As driver, end trip. As passenger end trip'
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
        <Row style={{marginBottom :70, marginLeft: 10}} className='m-0 p-0 mb-5' >
            <Toast isOpen={isOpen2} style={{width: '97%', marginTop: 30}}>
                <ToastHeader toggle={toggleToast1}>
                    <h3>Are you show you want to start this trip</h3>
                </ToastHeader>
                <ToastBody>
                  <Row className='m-0 p-0'>
                    <Col md={4} >
                      <center style={{ gap: 20 }}>
                        <p></p>
                        <p></p>
                        <h4>Umar</h4>
                        <h4>Caleb</h4>
                        <h4>Yunus</h4>
                      </center>
                    </Col>
                    <Col md={4}>
                      <center>
                      <p>Start trip</p>
                      <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                        <input 
                          type='checkbox'
                        />
                        <input 
                          type='checkbox'
                        />
                        <input 
                          type='checkbox'
                        />
                      </div>
                      </center>
                    </Col>
                    <Col md={4}>
                      <center>
                      <p>End trip</p>
                      <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                        <input 
                          type='checkbox'
                        />
                        <input 
                          type='checkbox'
                        />
                        <input 
                          type='checkbox'
                        />
                      </div>
                      </center>
                    </Col>
                  </Row>
                  <p>
                    <center className='mt-5'>  
                      As the driver, starting the trip and starting for 
                      each passenger ensure they on the ride with you which gives more quarantee to payment
                      by end of trip.
                    </center>
                  </p>
                  <Col md={12} className="mt-4">
                    <center>
                      <Button 
                        className="bg-success" 
                        size="lg"
                        onClick={toggleToast2}
                      >
                        End trip for everyone
                      </Button>
                    </center>
                  </Col>
                </ToastBody>
            </Toast>
        </Row>
        <Row style={{marginBottom :70, marginLeft: 10}} className='m-0 p-0 mb-5' >
            <Toast isOpen={isOpen3} style={{width: '97%', marginTop: 30}}>
                <ToastHeader toggle={toggleToast2}>
                    <h3>Are you show you want to end this trip</h3>
                </ToastHeader>
                <ToastBody>
                  <p>
                    As a driver, Ending the trip end it for all passengers and yourself. This means all passengers 
                    got to their  destination.
                  </p>
                    <Row>
                        <Col md={6} onClick={() => goto('/dashboard')}>
                            <RadioCard 
                                label= 'Yes, End trip'
                                description= 'As the driver, the car is about to move. As passenger, you are in car'
                            />
                        </Col>
                        <Col md={6} onClick={toggleToast}>
                            <RadioCard 
                                label= 'No. Not ready'
                                description= 'As driver, end trip. As passenger end trip'
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
