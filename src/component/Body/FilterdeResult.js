import React, { useState } from 'react';
import NavBar from '../NavBar';
import { Button, Col } from 'reactstrap';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router';
import InputComponent from './Input Form/InputComponent';
import SelectWithOptions from './SelectWithOptions';

export default function FilteredResult() {
  const goto = useNavigate();
  const [form, setForm] = useState({
    pickup_from: '',
    destination: ''
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm((prevState) => ({ ...prevState, [name]: value }));
    console.log(form);
  };

  return (
    <div>
      <NavBar componentName="Filtered All Drivers" />
      <div style={{ paddingLeft: 20 }}>
        <button className="backward_arrow" onClick={() => goto('/discover')}>
          <IoIosArrowBack /> Back
        </button>
      </div>
      <div style={{ padding: 20 }}>
        <h1>Driver</h1>
        <h4>Destination And Scheduling</h4>
        <Col md={12} style={{ marginTop: 15, gap: 10, display: 'flex' }}>
          <Col md={6} style={{
            marginTop: 45
          }}>
            <SelectWithOptions style={{
                backgroundColor: '#000'
            }}/> {/* Calling the first component */}
          </Col>
          <Col md={6}>
            <InputComponent
              label="Destination"
              placeholder="Destination"
              value={form.destination}
              name="destination"
              onChange={handleChange}
            />
          </Col>
        </Col>
        <Col md={6}>
          <label>
            <input className="app_input_radio" type="radio" />
            <b>Book Now</b>
          </label>
        </Col>
        <h4 style={{ marginTop: 30, marginLeft: 10 }}>Schedule a ride</h4>
        <Col md={12} style={{ marginTop: 15, gap: 10, display: 'flex' }}>
          <Col md={6}>
            <InputComponent
              label="Pickup Date"
              placeholder="Pickup Date"
              value={form.pickup_from}
              name="pickup_from"
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            <InputComponent
              label="Pickup Time"
              placeholder="Pickup Time"
              value={form.destination}
              name="destination"
              onChange={handleChange}
            />
          </Col>
        </Col>
        <Col md={12} className="mt-4">
          <center>
            <Button className="bg-success" size="lg">
              Request a Ride
            </Button>
          </center>
        </Col>
      </div>
    </div>
  );
}
