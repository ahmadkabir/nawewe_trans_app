import React from 'react'
import { useNavigate } from 'react-router'
import { Col, Row } from 'reactstrap'
import { friendToast } from '../Body/dataArray/dataArray'
import RadioCard from '../Body/CardsComponent/RadioCard'

export default function FriendToast() {
    const goto = useNavigate()

  return (
    <div>
        <div className='step_div'>
            <Row>
                {
                    friendToast.map((idx) => (
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
