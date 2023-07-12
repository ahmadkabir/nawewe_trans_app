import React from 'react'
import NavBar from '../NavBar'
import { Col, Row } from 'reactstrap'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { pickFriend } from './dataArray/dataArray'
import { BodyCards } from './CardsComponent/BodyCards'

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
        <Row style={{padding: 20, marginBottom: 80}}>
            {pickFriend.map((idx) =>(
                <Col md={4} onClick={() => goto(`/${idx.goto}`)}>
                    <BodyCards 
                        name= {idx.name}
                        time= {idx.time}
                        commonGroup= {idx.commonGroup}
                    />
                </Col>
            ))}
        </Row>
    </div>
  )
}
