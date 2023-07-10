import React, { useState } from 'react'
import NavBar from '../NavBar'
import { Col, Row } from 'reactstrap'
import img1 from '../Image/img5.fa08ce6ef02281466c52.png'
import img2 from '../Image/undraw_People_re_8spw.png'
import img3 from '../Image/undraw_delivery_truck_vt6p.png'
import img4 from '../Image/undraw_coffee_with_friends_3cbj.png'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { GiCrossedBones } from 'react-icons/gi'
import { useNavigate } from 'react-router'
import { Button, Toast, ToastHeader, ToastBody } from 'reactstrap';
import DiscoverToast from '../ToastModel/DiscoverToast'
import FriendToast from '../ToastModel/FriendToast'
export default function Discover() {
    const goto =useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleToast = () => {
        setIsOpen(!isOpen);
        setIsOpen1(false);
    };
    const toggleToast1 = () => {
        setIsOpen1(!isOpen1);
        setIsOpen(false);
    };

  return (
    <div>
        <NavBar componentName="Discover"/>
        <div style={{paddingLeft: 20, paddingBottom: 30}}>
            <button 
                className='backward_arrow'
                onClick={() => goto('/dashboard')}
            ><IoIosArrowBack /> Back</button>
        </div>
        <div className='discover_div'>
            <div>
                <h1>Discover</h1>
                <h4>What Do you want to Discover</h4>
            </div>
            <Row style={{display: 'flex', marginTop: 50}}>

                {/* first Div that will show all Drivers */}

                <Col md={3}>
                    <div className="carders" onClick={toggleToast}>
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
                <Col md={3} style={{marginTop: 10}}>
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
                <Col md={3} style={{marginTop: 10}}>
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
                <Col md={3} style={{marginTop: 10}}>
                    <div className="carders" onClick={toggleToast1}>
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
            </Row>

            <Row style={{marginBottom :70}}>
                <Toast isOpen={isOpen} style={{width: '97%', marginTop: 30}}>
                    <ToastHeader toggle={toggleToast}>
                        <h3>How do you want to search for drivers </h3>
                    </ToastHeader>
                    <ToastBody>
                        <DiscoverToast />
                    </ToastBody>
                </Toast>
            </Row>

            <Col md={12}>
                <Toast isOpen={isOpen1} style={{width: '97%', marginTop: 30}}>
                    <ToastHeader toggle={toggleToast1}>
                        <h3>Pick an Action </h3>
                    </ToastHeader>
                    <ToastBody>
                        <FriendToast />
                    </ToastBody>
                </Toast>
            </Col>
        </div>
    </div>
  )
}
