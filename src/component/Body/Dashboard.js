import React, { useState } from 'react'
import NavBar from '../NavBar'
import { Col, Row, Toast, ToastBody, ToastHeader } from 'reactstrap'
import { useNavigate } from 'react-router'
import { ImageCard } from './CardsComponent/ImageCard'
import img1 from '../Image/img3.f153ae21abda72334a4d.png'
import img2 from '../Image/img2.df969720577b3ee7f6c1.png'
import img3 from '../Image/img4.38cde03be64187682173.png'
import img4 from '../Image/img5.fa08ce6ef02281466c52.png'
import img5 from '../Image/img1.06114b33e8a3799da8d6.png'
import RadioCard from './CardsComponent/RadioCard'

export default function Dashboard() {
    const goto = useNavigate()
    const [step, setStep] = useState(1)
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    
    const toggleToast = () => {
        setIsOpen(!isOpen);
    };

    const toggleToast1 = () => {
        setIsOpen1(!isOpen1);
        setIsOpen(false)
    };


  return (
    <div className='body_div'>
        <NavBar componentName="DashBoard"/>
        <div className='dashboard_first_div'>
            <h1 className='first_header'>
                Hello Olalade
            </h1>
            <h5>What would you like to do?</h5>
        </div>
        <nav className='dashboard_nav'>
            <li onClick={() => {setStep(1)}} className={step === 1 ? 'dashboard_nav_li' : ''}> Sell</li>
            <li onClick={() => {setStep(2)}} className={step === 2 ? 'dashboard_nav_li' : ''}>Rent</li>
            <li onClick={() => {setStep(3)}} className={step === 3 ? 'dashboard_nav_li' : ''}>Sell</li>
        </nav>
        {step === 1 ?
            <Row style={{marginBottom: 80}} className='m-0 p-0'>
                <Col md={4} style={{marginTop: '30px'}} onClick={() => goto('/discover')}>
                    <ImageCard 
                        image= {img1}
                        title= 'Discover'
                        describtion= 'Find drivers, passengers and other services'
                        backgroundColor= '#ffbf80'
                    />
                </Col>
                <Col md={4} style={{marginTop: '30px'}} onClick={toggleToast}>
                    <ImageCard 
                        image= {img2}
                        title= 'Your OnGoing'
                        describtion= 'You have a trip ongoing from oshodi to lekki'
                        backgroundColor= '#331a00'
                        color= '#fff'
                    />
                </Col>
                <Col md={4} style={{marginTop: '30px'}} onClick={() => goto('/set_driving_plan')}>
                    <ImageCard 
                        image= {img3}
                        title= 'Driving Plans'
                        describtion= 'Signify Intent to the drive create destination'
                        backgroundColor= '#ffd9b3'
                    />
                </Col>
                <Col md={4} style={{marginTop: '30px'}}>
                    <ImageCard 
                        image= {img4}
                        title= 'Passengers Plans'
                        describtion= 'Signify Intent to be a passenger'
                        backgroundColor= '#ffffb3'
                    />
                </Col>
                <Col md={4} style={{marginTop: '30px'}}>
                    <ImageCard 
                        image= {img5}
                        title= 'Private Groups'
                        describtion= 'Privacy Security, Ride with family and friends'
                        backgroundColor= '#ccf2ff'
                    />
                </Col>
            </Row> : ''
        }
        {step === 2 ?
            <p>I am step 2</p> : ''
        }
        {step === 3 ?
            <p>I am step 3</p> : ''
        }
        <Row style={{ marginLeft: 10}} className='m-0 p-0'>
            <Toast isOpen={isOpen} style={{width: '97%', marginTop: 30}}>
                <ToastHeader toggle={toggleToast}>
                    <h3>This is only seen by UI UX</h3>
                </ToastHeader>
                <ToastBody>
                    <div>
                        <Row>
                            <Col md={6} onClick={() => goto('/on_going_trip')}>
                                <RadioCard 
                                    label= 'Go to driver view'
                                    description= 'Enable early previewers to see driver view while on trip'
                                />
                            </Col>
                            <Col md={6} onClick={toggleToast1}>
                                <RadioCard 
                                    label= 'Go to passengers view'
                                    description= 'Enable early previewers to see driver view while on trip'
                                />
                            </Col>
                        </Row>
                    </div>
                </ToastBody>
            </Toast>
            <Row style={{ marginLeft: 10}} className='m-0 p-0'>
                <Toast isOpen={isOpen1} style={{width: '97%', marginTop: 30}}>
                    <ToastHeader toggle={toggleToast1}>
                        <h3>This is only seen by UI UX</h3>
                    </ToastHeader>
                    <ToastBody>
                        <Row>
                            <Col md={6} onClick={() => goto('/end_trip')}>
                                <RadioCard 
                                    label= 'See passeger ongoing trip'
                                    description= 'Enable early previewers to see driver view while on trip'
                                />
                            </Col>
                            <Col md={6} onClick={() => goto('/on_going_trip_for_pass')}>
                                <RadioCard 
                                    label= 'See passengers about to start'
                                    description= 'Enable early previewers to see driver view while on trip'
                                />
                            </Col>
                        </Row>
                    </ToastBody>
                </Toast>
            </Row>
        </Row>
    </div>
  )
}
