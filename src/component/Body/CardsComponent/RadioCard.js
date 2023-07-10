import React from 'react';
import { Label } from 'reactstrap';

const RadioCard = (props) => {
  return (
    <div className="toastCard">
      <div style={{ display: 'flex', padding: 10 }}>
        <div style={{ display: 'flex' }}>
          <input type='radio' style={{ marginRight: 15 }} />
          <div className='div_of_step'>
            <h5 style={{ letterSpacing: 1 }}>{props.label}</h5>
            <p className='carders_para'>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioCard;
