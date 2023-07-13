import React from 'react'
import NavBar from '../NavBar'
import { Button, Col, Row } from 'reactstrap'
import img1 from '../Image/Web capture_13-7-2023_101618_127.0.0.1.jpeg'
import { useNavigate } from 'react-router'

export default function QRCode() {
    const goto = useNavigate()

  return (
    <div>
        <NavBar componentName="Scan QR Code"/>
        <Row>
            <Col md={12} className='mt-5'>
                <center>
                    <div style={{
                        width: 500,
                        height: 500,
                        backgroundColor: '#fff',
                        borderRadius: 15,
                        padding: 30,
                    }}>
                        <img
                            src={img1}
                            alt='QR imager'
                        />
                    </div>
                </center>
            </Col>
            <Col md={12} className="mt-4 mb-5">
            <center>
              <Button 
                className="bg-success mb-5" 
                size="lg"
                onClick={() => goto('/end_trip')}
              >
                Done
              </Button>
            </center>
          </Col>
        </Row>
    </div>
  )
}
