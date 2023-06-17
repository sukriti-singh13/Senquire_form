import React, { useState } from "react";

const Select = ({ field_label, field_options, handleElements }) => {
  // const [val, setVal] = useState("");
  // const handleInput = (e) => {
  //   const inputValue = e.target.value;
  //   setVal(inputValue);
  //   handleElements(inputValue);
  // };
  const [selectedValues, setSelectedValues] = useState([]);

  const handleInput = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedValues(selectedOptions);
    handleElements(selectedOptions);
  };
  return (
    <div className="user_input">
      <label>{field_label}</label>
      <select
        multiple={true}
        value={selectedValues}
        onChange={(e) => handleInput(e)}
      >
        <option disabled>Add camera to select</option>
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
