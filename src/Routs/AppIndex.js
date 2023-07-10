import React from 'react'
import { Col, Row } from 'reactstrap'
import SideBar from '../component/SideBar'
import { Outlet, useNavigate } from 'react-router'
import { MdDashboard, MdOutlineBedroomParent, MdRoomPreferences } from 'react-icons/md'
import { ImUsers} from 'react-icons/im'
import { FaHotel} from 'react-icons/fa'

export default function AppIndex() {
  const goto = useNavigate()

  return (
    <div className='body'>
        <Row>
            <Col md={2}>
                <SideBar />
            </Col>
            <div className="mobile_menu" style={{width: "100%"}}>
              <div>
                <MdDashboard onClick={() => goto('#')} />
              </div>
              <div>
                <FaHotel
                  size="1.7rem"
                  onClick={() => goto('#')}
                />
              </div>
              <div>
                <MdOutlineBedroomParent
                  onClick={() => goto('#')}
                />
              </div>
              <div>
                <MdRoomPreferences onClick={() => goto('#')} />
              </div>
            </div>
            <Col md={10}>
                <Col md={12}>
                  <Outlet />
                </Col>
            </Col>
        </Row>
    </div>
  )
}
