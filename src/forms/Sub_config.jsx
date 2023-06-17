import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Element from "../components/element";
import { addNewSubConfig } from "../features/ConfigSlice";

const Sub_config = () => {
  const { subConfigInterface } = useSelector((state) => state.config);
  const stateSubConfig = useSelector((state) => state.config.subConfig);
  const [Rerender, setRerender] = useState(Date.now());
  const dispatch = useDispatch();
  const [subConfig, setSubConfig] = useState();
  const [error, setError] = useState("");
  const resetState = () => {
    const initialSubConfig = {};
    subConfigInterface.map(
      (subConfig) =>
        (initialSubConfig[subConfig.field_id] = subConfig.field_value)
    );
    setSubConfig(initialSubConfig);
  };
  useEffect(() => {
    resetState();
  }, []);

  const handleElements = (val, field) => {
    setSubConfig({ ...subConfig, [field]: val });
  };
  const handleNewSubConfig = () => {
    if (subConfig.type) {
      const payload = {};
      const name = subConfig.type;
      const newconfig = { ...subConfig };
      delete newconfig.type;
      payload[name] = newconfig;
      dispatch(addNewSubConfig(payload));
      setRerender(Date.now());
      resetState();
    } else {
      setError("Provide necessaary fields");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="sub_config">
      <h1>Add Type</h1>

      <div key={Rerender}>
        {subConfigInterface &&
          subConfigInterface.map((field, id) => (
            <Element
              key={id}
              field={field}
              handleElements={(val) => handleElements(val, field.field_id)}
            />
          ))}

        <button onClick={handleNewSubConfig}> Add Type</button>
        <p className="error">{error && error}</p>
      </div>
    </div>
  );
};

export default Sub_config;
