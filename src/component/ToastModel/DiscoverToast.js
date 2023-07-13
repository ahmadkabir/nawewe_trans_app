import React from 'react'
import { useNavigate } from 'react-router'
import { Col, Row } from 'reactstrap'
import { discoverToast } from '../Body/dataArray/dataArray'
import RadioCard from '../Body/CardsComponent/RadioCard'

export default function DiscoverToast() {
    const goto =useNavigate()

  return (
    <div>
        <div className='step_div'>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                </div>
                    <Row className='m-0 p-0'>
                        {
                            discoverToast.map((idx) => (
                                <Col md={6} onClick={() => goto(`/${idx.goto}`)}>
                                    <RadioCard 
                                        label= {idx.label}
                                        description= {idx.description}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </div>
  )
}
