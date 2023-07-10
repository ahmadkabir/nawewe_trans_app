import React, { useState } from 'react'
import NavBar from '../NavBar'
import { Col, Row } from 'reactstrap'
import img1 from '../Image/img3.f153ae21abda72334a4d.png'
import img2 from '../Image/img2.df969720577b3ee7f6c1.png'
import img3 from '../Image/img4.38cde03be64187682173.png'
import img4 from '../Image/img5.fa08ce6ef02281466c52.png'
import img5 from '../Image/img1.06114b33e8a3799da8d6.png'
import { useNavigate } from 'react-router'

export default function Dashboard() {
    const goto = useNavigate()
    const [step, setStep] = useState(1)
  return (
    <div>
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
            <div>
                <Row style={{display: 'flex'}} onClick={() => goto('/discover')}>
                    <Col md={4} style={{marginTop: '30px'}}>
                        <div className="card" style={{backgroundColor: '#ffbf80'}}>
                            <div style={{display: 'flex'}}>
                                <img 
                                    src={img1} 
                                    alt='space' 
                                    className='image1'
                                />
                                <div>  
                                    <p style={{marginLeft: 10}}>Discover</p>
                                    <p style={{fontSize: 13, fontWeight: 'lighter', marginLeft: 10, marginTop: -10}}>
                                        Find drivers, passengers and other services
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} style={{marginTop: '30px'}}>
                        <div className="card" style={{backgroundColor: '#331a00', color:'#fff'}}>
                            <div style={{display: 'flex'}}>
                                <img 
                                    src={img2} 
                                    alt='space' 
                                    className='image1'
                                />
                                <div>  
                                    <p style={{marginLeft: 10}}>Your OnGoing</p>
                                    <p style={{fontSize: 13, fontWeight: 'lighter', marginLeft: 10, marginTop: -10}}>
                                        You have a trip ongoing from oshodi to lekki
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} style={{marginTop: '30px'}}>
                        <div className="card" style={{backgroundColor: '#ffd9b3'}}>
                            <div style={{display: 'flex'}}>
                                <img 
                                    src={img3} 
                                    alt='space' 
                                    className='image1'
                                />
                                <div>  
                                    <p style={{marginLeft: 10}}>Driving Plans</p>
                                    <p style={{fontSize: 13, fontWeight: 'lighter', marginLeft: 10, marginTop: -10}}>
                                        Signify Intent to the drive create destination
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{display: 'flex',justifyContent: 'space-around'}}>
                    <Col md={4} style={{marginTop: '30px', marginLeft: 40}}>
                        <div className="card" style={{backgroundColor:'#ffffb3'}}>
                            <div style={{display: 'flex'}}>
                                <img 
                                    src={img4} 
                                    alt='space' 
                                    className='image1'
                                />
                                <div>  
                                    <p style={{marginLeft: 10}}>Passengers Plans</p>
                                    <p style={{fontSize: 13, fontWeight: 'lighter', marginLeft: 10, marginTop: -10}}>
                                        Signify Intent to be a passenger
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} style={{marginTop: '30px',marginLeft: 20}}>
                        <div className="card" style={{backgroundColor: '#ccf2ff'}}>
                            <div style={{display: 'flex'}}>
                                <img 
                                    src={img5} 
                                    alt='space' 
                                    className='image1'
                                />
                                <div>  
                                    <p style={{marginLeft: 10}}>Private Groups</p>
                                    <p style={{fontSize: 13, fontWeight: 'lighter', marginLeft: 10, marginTop: -10}}>
                                        Privacy Security, Ride with family and friends
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div> : ''
        }
        {step === 2 ?
            <p>I am step 2</p> : ''
        }
        {step === 3 ?
            <p>I am step 3</p> : ''
        }
    </div>
  )
}
