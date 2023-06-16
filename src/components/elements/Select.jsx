import React from "react";

const Select = ({ field_label, field_options }) => {
  return (
    <div className="user_input">
      <label>{field_label}</label>
      <select>
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
