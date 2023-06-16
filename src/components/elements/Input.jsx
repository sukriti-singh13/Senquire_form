import React from "react";
import { useDispatch } from "react-redux";
// import { handleChangeInInput } from "../../features/ConfigSlice";

const Input = ({
  field_id,
  field_label,
  field_placeholder,
  field_value,

}) => {
  return (
    <div className="user_input">
      <label htmlFor="exampleInputEmail1">{field_label}</label>
      <input
        className="input-text"
        type="text"
        placeholder={field_placeholder ? field_placeholder : ""}
        value={field_value}
      />
    </div>
  );
};

export default Input;
