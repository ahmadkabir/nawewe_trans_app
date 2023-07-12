import React, { useState } from 'react'
import NavBar from '../NavBar'
import { Button, Col, Row, Toast, ToastBody, ToastHeader } from 'reactstrap'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { DrivingPlan,  } from './dataArray/dataArray'
import { BodyCards } from './CardsComponent/BodyCards'

export default function FriendDrivingPlan() {
    const goto = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const toggleToast = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div>
        <NavBar componentName="Pick friend driving plan"/>
        <div style={{paddingLeft: 20}}>
            <button 
                className='backward_arrow'
                onClick={() => goto('/pick_friend')}
            ><IoIosArrowBack /> Back</button>
        </div>
        <div style={{padding: 20}}>
            <h1>Pick friend driving plan to join</h1>
        </div>
        <Row style={{marginBottom: 0}}>
            {DrivingPlan.map((idx) => (
                <Col md={4} onClick={toggleToast}>
                    <BodyCards 
                        name= {idx.name}
                        time= {idx.time}
                        vehicleType= {idx.vehicleType}
                        fare= {idx.fare}
                        from= {idx.from}
                        to= {idx.to}
                        spacesLeft= {idx.spacesLeft}
                    />
                </Col>
            ))}
        </Row>
        <Row style={{marginBottom: 60}}>
                <Toast isOpen={isOpen} style={{width: '97%', marginTop: 30, marginLeft: 10}}>
                    <ToastHeader toggle={toggleToast}>
                        <h3>Are you sure you want to send</h3>
                    </ToastHeader>
                    <ToastBody>
                        <Row>
                            <Col md={6}>
                                <div className="toastCard">
                                    <div style={{display: 'flex', padding: 10}}>
                                        <div style={{display: 'flex'}}>  
                                            <input
                                                type='radio' 
                                                style={{marginRight: 15}}
                                            />
                                            <div className='div_of_step'>
                                                <h5 style={{letterSpacing: 1}}>Yes</h5>
                                                <p className='carders_para'>Filter by Location, amount etc</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="toastCard">
                                    <div style={{display: 'flex', padding: 10}}>
                                        <div style={{display: 'flex'}}>  
                                            <input
                                                type='radio' 
                                                style={{marginRight: 15}}
                                            />
                                            <div className='div_of_step'>
                                                <h5 style={{letterSpacing: 1}}>No</h5>
                                                <p className='carders_para'>Filter by Location, amount etc</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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