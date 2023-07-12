import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

export const BodyCards = (props) => {
  const { name, time, vehicleType, fare, from, to, spacesLeft } = props;

  return (
    <Card className='resultCard'>
      <CardHeader>{name}</CardHeader>
      <CardBody>
        <p style={{ fontWeight: 'lighter', marginTop: -6 }}>Take off time: **{time}**</p>
        <p style={{ fontWeight: 'lighter', marginTop: -15 }}>Vehicle Type: **{vehicleType}**</p>
        <p style={{ fontWeight: 'lighter', marginTop: -15 }}>Transport Fare: **{fare}**</p>
        {from && <p style={{ fontWeight: 'lighter', marginTop: -15 }}><span style={{ color: 'red' }}>**From:** </span>**{from}**</p>}
        {to && <p style={{ fontWeight: 'lighter', marginTop: -15 }}><span style={{ color: 'green' }}>**To:** </span>**{to}**</p>}
        <p style={{ fontWeight: 'lighter', marginTop: -15 }}>**{spacesLeft} space left**</p>
      </CardBody>
    </Card>
  );
};