import React from 'react'
import NavBar from '../NavBar'
import { Col, Row } from 'reactstrap'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { DrivingPlan } from './dataArray/dataArray'
import { BodyCards } from './CardsComponent/BodyCards'

export default function Result() {
    const goto = useNavigate()

  return (
    <div>
        <NavBar componentName="All Drivers"/>
        <div style={{paddingLeft: 20}}>
            <button 
                className='backward_arrow'
                onClick={() => goto('/discover')}
            ><IoIosArrowBack /> Back</button>
        </div>
        <div style={{padding: 20}}>
            <h1>Search Result (driver's List )</h1>
            <h4>Double tap to comfirm ride</h4>
        </div>
        <Row>
            {DrivingPlan.map((idx) => (
                <Col md={4}>
                    <BodyCards 
                        name= {idx.name}
                        time= {idx.time}
                        vehicleType= {idx.vehicleType}
                        fare= {idx.fare}
                        spacesLeft= {idx.spacesLeft}
                    />
                </Col>
            ))}
        </Row>
    </div>
  )
}
