import React, { useState } from "react";

const Input = ({
  field_label,
  field_placeholder,
  field_value,
  handleElements,
}) => {
  const [val, setVal] = useState(field_value);
  const handleInput = (e) => {
    const inputValue = e.target.value;
    setVal(inputValue);
    handleElements(inputValue);
  };
  return (
    <div className="user_input">
      <label htmlFor="exampleInputEmail1">{field_label}</label>
      <input
        className="input-text"
        type="text"
        placeholder={field_placeholder ? field_placeholder : ""}
        value={val}
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
};

export default Input;
