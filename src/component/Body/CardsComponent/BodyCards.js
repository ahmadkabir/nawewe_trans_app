import React from 'react';

export const BodyCards = (props) => {
  const { name, time, vehicleType, fare, commonGroup, from, to, spacesLeft } = props;

  return (
    <div className='resultCard' style={{marginBottom: 10}}>
      <h4>{name}</h4>
      <p style={{ fontWeight: 'lighter', marginTop: -6 }}>Take off time: <b>{time}</b></p>
      {vehicleType && <p style={{ fontWeight: 'lighter', marginTop: -15 }}>Vehicle Type: <b>{vehicleType}</b></p>}
      {fare && <p style={{ fontWeight: 'lighter', marginTop: -15 }}>Transport Fare: <b>{fare}</b></p>}
      {commonGroup && <p style={{ fontWeight: 'lighter', marginTop: -15 }}>Common group: <b>{commonGroup}</b></p>}
      {from && <p style={{ fontWeight: 'lighter', marginTop: -15 }}><span style={{ color: 'red' }}><b>From:</b> </span><b>{from}</b></p>}
      {to && <p style={{ fontWeight: 'lighter', marginTop: -15 }}><span style={{ color: 'green' }}><b>To:</b> </span><b>{to}</b></p>}
      {spacesLeft && <p style={{ fontWeight: 'lighter', marginTop: -15 }}><b>{spacesLeft} space left</b></p>}
    </div>
  );
};