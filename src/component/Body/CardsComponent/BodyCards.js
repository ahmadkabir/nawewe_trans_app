import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

export const ReusableCard = (props) => {
  const { name, time, vehicleType, fare, commonGroup, from, to, spacesLeft } = props;

  return (
    <Card className='resultCard' style={{ marginBottom: 10 }}>
      <CardHeader>
        <h4>{name}</h4>
      </CardHeader>
      <CardBody>
        <p style={{ fontWeight: 'lighter', marginTop: -6 }}>Take off time: <b>{time}</b></p>
        {vehicleType && <p style={{ fontWeight: 'lighter', marginTop: -15 }}>Vehicle Type: <b>{vehicleType}</b></p>}
        {fare && <p style={{ fontWeight: 'lighter', marginTop: -15 }}>Transport Fare: <b>{fare}</b></p>}
        {commonGroup && <p style={{ fontWeight: 'lighter', marginTop: -15 }}>Common group: <b>{commonGroup}</b></p>}
        {from && <p style={{ fontWeight: 'lighter', marginTop: -15 }}><span style={{ color: 'red' }}><b>From:</b> </span><b>{from}</b></p>}
        {to && <p style={{ fontWeight: 'lighter', marginTop: -15 }}><span style={{ color: 'green' }}><b>To:</b> </span><b>{to}</b></p>}
        {spacesLeft && <p style={{ fontWeight: 'lighter', marginTop: -15 }}><b>{spacesLeft} space left</b></p>}
      </CardBody>
    </Card>
  );
};
