import React from "react";
import { useDispatch } from "react-redux";

const Select = ({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_options,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="user_input">
      <label>{field_label}</label>
      <select>
        <option>Open this select menu</option>
        {field_options&&field_options.length > 0 &&
          field_options.map((option, i) => (
            <option value={option.option_label} key={i}>
              {option.option_label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
