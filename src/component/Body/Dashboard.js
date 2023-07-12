import React, { useState } from 'react'
import NavBar from '../NavBar'
import { Col, Row } from 'reactstrap'
import { useNavigate } from 'react-router'
import { dashBoard } from './dataArray/dataArray'
import { ImageCard } from './CardsComponent/ImageCard'

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
            <Row style={{marginBottom: 80}}>
                {dashBoard.map((idx) => (
                    <Col md={4} style={{marginTop: '30px'}} onClick={() => goto(`/${idx.goto}`)}>
                        <ImageCard
                            image= {idx.image}
                            title= {idx.title}
                            describtion= {idx.describtion}
                            backgroundColor= {idx.backgroundColor}
                            color= {idx.color}
                        />
                    </Col>
                ))}
            </Row> : ''
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
