import React, { useState } from "react";
import { useSelector } from "react-redux";
import Element from "../components/element";

const Sub_config = () => {
  const { subConfigInterface } = useSelector((state) => state.config);

  const [subConfig,setSubConfig] = useState();

  return (
    <div className="sub_config">
      {subConfigInterface &&
       subConfigInterface.map((field, id) => <Element key={id} field={field} />)}
      <button> Add Type</button>
    </div>
  );
};

export default Sub_config;
