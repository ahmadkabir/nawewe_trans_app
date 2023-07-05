import React, { useState } from 'react'
import NavBar from '../NavBar'
import { Col } from 'reactstrap'
import img1 from '../Image/img5.fa08ce6ef02281466c52.png'
import img2 from '../Image/undraw_People_re_8spw.png'
import img3 from '../Image/undraw_delivery_truck_vt6p.png'
import img4 from '../Image/undraw_coffee_with_friends_3cbj.png'
import { IoIosArrowForward } from 'react-icons/io'
import { GiCrossedBones } from 'react-icons/gi'

export default function Discover() {
    const [step, setStep] = useState(0)

  return (
    <div>
        <NavBar componentName="Discover"/>
        <div className='discover_div'>
            <div>
                <h1>Discover</h1>
                <h4>What Do you want to Discover</h4>
            </div>
            <Col md={12} style={{display: 'flex', marginTop: 60}}>
                <Col md={3}>
                    <div className="carders" onClick={() => {setStep(1)}}>
                        <div style={{display: 'flex'}}>
                            <img 
                                src={img1} 
                                alt='space' 
                                className='image'
                                style={{backgroundColor: 'white'}}
                            />
                            <div>  
                                <p style={{marginLeft: 20, marginTop: 10}}>Discover <IoIosArrowForward style={{marginLeft: 50}}/></p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="carders">
                        <div style={{display: 'flex'}}>
                            <img 
                                src={img2} 
                                alt='space' 
                                className='image'
                                style={{backgroundColor: 'white'}}
                            />
                            <div>  
                                <p style={{marginLeft: 20, marginTop: 10}}>Passengers <IoIosArrowForward style={{marginLeft: 40}}/></p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="carders">
                        <div style={{display: 'flex'}}>
                            <img 
                                src={img3} 
                                alt='space' 
                                className='image'
                                style={{backgroundColor: 'white'}}
                            />
                            <div>  
                                <p style={{marginLeft: 20, marginTop: 10}}>Delivery <IoIosArrowForward style={{marginLeft: 50}}/></p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="carders">
                        <div style={{display: 'flex'}}>
                            <img 
                                src={img4} 
                                alt='space' 
                                className='image'
                                style={{backgroundColor: 'white'}}
                            />
                            <div>  
                                <p style={{marginLeft: 5, marginTop: 10}}>My Friends & Groups <IoIosArrowForward style={{marginLeft: 0}}/></p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Col>
            {step === 1 ? 
                <div className='step_div'>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <h3>How do you want to search for drivers </h3>
                        <GiCrossedBones 
                            className='icon_'
                            onClick={() => {setStep(0)}}
                        />
                    </div>
                    <Col md={12} style={{marginTop: '30px', display: 'flex'}}>
                        <Col md={6}>
                            <div className="carders">
                                <div style={{display: 'flex', padding: 10}}>
                                    <div style={{display: 'flex'}}>  
                                        <input
                                            type='radio' 
                                        />
                                        <div className='div_of_step'>
                                            <h5 style={{letterSpacing: 1}}>Show me all driver</h5>
                                            <p className='carders_para'>No filter</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="carders">
                                <div style={{display: 'flex', padding: 10}}>
                                    <div style={{display: 'flex'}}>  
                                        <input
                                            type='radio' 
                                        />
                                        <div className='div_of_step'>
                                            <h5 style={{letterSpacing: 1}}>Show me all Filterd drivers</h5>
                                            <p className='carders_para'>Filter by Location, amount etc</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Col>
                </div> : ''
            }
        </div>
    </div>
  )
}
