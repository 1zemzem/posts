import React from "react";

const Select = ({ options, defaltValue, value, onChange }) => {
  return (
    <div>
      <select value={value}
      onChange={event => onChange(event.target.value)}>
        <option disabled value="">{defaltValue}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
