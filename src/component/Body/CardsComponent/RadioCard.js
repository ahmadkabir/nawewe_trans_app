import React from 'react';
import { Label, FormGroup, Input } from 'reactstrap';

const RadioCard = (props) => {
  return (
    <div className="toastCard">
      <FormGroup check>
        <div className="d-flex">
          <Label check className="d-flex">
            <Input type="radio" style={{ marginRight: 15, marginTop: 25 }} />
            <div className="div_of_step">
              <h5 style={{ letterSpacing: 1 }}>{props.label}</h5>
              <p className="carders_para">{props.description}</p>
            </div>
          </Label>
        </div>
      </FormGroup>
    </div>
  );
};

export default RadioCard;
