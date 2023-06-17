import React, { useState } from "react";

const Select = ({ field_label, field_options, handleElements }) => {
  const [val, setVal] = useState("");
  const handleInput = (e) => {
    const inputValue = e.target.value;
    setVal(inputValue);
    handleElements(inputValue);
  };
  return (
    <div className="user_input">
      <label>{field_label}</label>
      <select value={val} onChange={(e) => handleInput(e)}>
        <option>Add camera to select</option>
        {field_options &&
          field_options.length > 0 &&
          field_options.map((option, i) => (
            <option value={option} key={i}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
