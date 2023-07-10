import React from 'react'
import NavBar from '../NavBar'
import { Col } from 'reactstrap'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'

export default function PickFriend() {
    const goto = useNavigate()

  return (
    <div>
        <NavBar componentName="Pick your frind"/>
        <div style={{paddingLeft: 20}}>
            <button 
                className='backward_arrow'
                onClick={() => goto('/discover')}
            ><IoIosArrowBack /> Back</button>
        </div>
        <div style={{padding: 20}}>
            <h1>Pick your Friend</h1>
            <h4>Double tap to comfirm ride</h4>
        </div>
        <Col md={12} style={{padding: 20, display: 'flex'}}>
            <Col md={4}>
                <div className='pickFriendCard' onClick={() => goto('/pick_friend_driving_plan')}>
                    <h4>Ololade Bond(5 stars)</h4>
                    <p style={{fontWeight: 'lighter', marginTop: -6}}>Friend since: <b>13:30</b></p>
                    <p style={{fontWeight: 'lighter', marginTop: -15}}>Common group: <b>Black Telsa</b></p>
                </div>
            </Col>
            <Col md={4}>
                <div className='pickFriendCard'>
                    <h4>Ololade Bond(5 stars)</h4>
                    <p style={{fontWeight: 'lighter', marginTop: -6}}>Friend since: <b>13:30</b></p>
                    <p style={{fontWeight: 'lighter', marginTop: -15}}>Common group: <b>Black Telsa</b></p>
                </div>
            </Col>
            <Col md={4}>
                <div className='pickFriendCard'>
                    <h4>Ololade Bond(5 stars)</h4>
                    <p style={{fontWeight: 'lighter', marginTop: -6}}>Friend since: <b>13:30</b></p>
                    <p style={{fontWeight: 'lighter', marginTop: -15}}>Common group: <b>Black Telsa</b></p>
                </div>
            </Col> 
        </Col>
        <Col md={12} style={{padding: 20, display: 'flex'}}>
             <Col md={4}>
                <div className='pickFriendCard'>
                    <h4>Ololade Bond(5 stars)</h4>
                    <p style={{fontWeight: 'lighter', marginTop: -6}}>Friend since: <b>13:30</b></p>
                    <p style={{fontWeight: 'lighter', marginTop: -15}}>Common group: <b>Black Telsa</b></p>
                </div>
            </Col>
        </Col>
    </div>
  )
}
