import React from "react";
import { useDispatch } from "react-redux";

const Checkbox = ({ field_id, field_label, field_value }) => {
  const dispatch = useDispatch();
  return (
    <div className="user-input-checkbox">
      <input
        type="checkbox"
        checked={field_value}
        // onChange={(e) => dispatch(handleChangeInInput({ field_id, e }))}
      />
      <label>{field_label}</label>
    </div>
  );
};

export default Checkbox;
