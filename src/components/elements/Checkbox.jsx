import React, { useState } from "react";

const Checkbox = ({ field_id, field_label, field_value,handleElements }) => {
  const [val , setVal] = useState(field_value)
  const handleInput=(e)=>{
    const inputValue = e.target.checked
    setVal(inputValue)
    handleElements(inputValue)
  }
  return (
    <div className="user-input-checkbox">
      <input
        type="checkbox"
        checked={val}
       onChange={(e)=>handleInput(e)}
      />
      <label>{field_label}</label>
    </div>
  );
};

export default Checkbox;
