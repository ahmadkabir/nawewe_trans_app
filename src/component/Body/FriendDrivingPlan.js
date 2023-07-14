import React, { useState } from 'react'
import NavBar from '../NavBar'
import { Button, Col, Row, Toast, ToastBody, ToastHeader } from 'reactstrap'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { DrivingPlan,  } from './dataArray/dataArray'
import  {BodyCards}  from './CardsComponent/BodyCards'
import RadioCard from './CardsComponent/RadioCard'

export default function FriendDrivingPlan() {
    const goto = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
;
    const toggleToast = () => {
        setIsOpen(!isOpen);
    };

    const toggleToast1 = () => {
        setIsOpen1(!isOpen1);  
        setIsOpen(false);
    }

  return (
    <div className='body_div'>
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
        <Row style={{marginBottom: 0}} className='m-0 p-0'>
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
        <Row style={{marginBottom: 60}} className='m-0 p-0'>
            <Toast isOpen={isOpen} style={{width: '97%', marginTop: 30, marginLeft: 10}}>
                <ToastHeader toggle={toggleToast}>
                    <h3>Are you sure you want to send</h3>
                </ToastHeader>
                <ToastBody>
                    <Row className='m-0 p-0'>
                        <Col md={6} onClick={toggleToast1}>
                            <RadioCard 
                                label= 'Yes'
                                description= 'Filter by Location, amount etc'
                            />
                        </Col>
                        <Col md={6} onClick={() => {setIsOpen(false)}}>
                            <RadioCard 
                                label= 'No'
                                description= 'Filter by Location, amount etc'
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
        <Row style={{marginBottom: 60}} className='m-0 p-0'>
            <Toast isOpen={isOpen1} style={{width: '97%', marginTop: 30, marginLeft: 10}}>
                <ToastHeader toggle={toggleToast1}>
                    <h3>Are you sure you want to send</h3>
                </ToastHeader>
                <ToastBody>
                    <Row className='m-0 p-0'>
                        <center>
                            <h4 className='text-success'>Send Successful</h4>
                            {/* < /> */}
                        </center>
                    </Row>
                </ToastBody>
            </Toast>
        </Row>
    </div>
  )
}