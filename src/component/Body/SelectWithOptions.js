import React, { useState } from 'react';
import Select from 'react-select';

const SelectWithOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'option1', label: 'From my Saved Address', para: 'No filter', type: 'radio' },
    { value: 'option2', label: 'From google map', para: 'Filter 1 description', type: 'radio' },
    { value: 'option3', label: 'Enter manually', para: 'Filter 2 description', type: 'radio' },
  ];

  const handleSelectChange = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <div>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
        components={{
          Option: (props) => <CustomOption {...props} options={options} selectedOption={selectedOption} />,
        }}
      />
    </div>
  );
};

const CustomOption = ({ children, innerProps, innerRef, options, selectedOption }) => (
  <div {...innerProps}>
    <label className='radio_btn'>
      <div style={{ display: 'flex' }}>
        <input className='input_app' type="radio" ref={innerRef} {...innerProps} />
        <div className='div_of_step'>
          <h6 style={{ letterSpacing: 1 }}>{children}</h6>
          {options.map((option) => option.value === selectedOption?.value && (
            <p className='carders_para'>{option.para}</p>
          ))}
        </div>
      </div>
    </label>
  </div>
);

export default SelectWithOptions;
