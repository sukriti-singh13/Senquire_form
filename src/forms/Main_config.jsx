import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToMainConfig } from "../features/ConfigSlice";
// import MainInput from "./MainInput";
const Main_config = () => {
  const [camera, setCamera] = useState("");
  const dispatch = useDispatch();

  const cameras = useSelector((state) => state.config.mainConfig);

  const addCamera = () => {
    if (camera) {
      dispatch(addToMainConfig(camera));
      setCamera("");
    }
  };
  return (
    <div className="main_config">
      <h1> Add Camera</h1>
      {cameras.map((item, index) => (
        <div className="display_data" key={item}>
          <p> Camera {index + 1}</p>
          <div className="main-content">
            <div className="name"> Name: {item}</div>
          </div>
        </div>
      ))}

      <div className="user_input">
        <label>Camera Name </label>
        <input
          className="input-text"
          name="option_label"
          type="text"
          value={camera}
          onChange={(e) => setCamera(e.target.value)}
        />
      </div>

      <button className="add_camera" onClick={addCamera}>
        Add
      </button>
    </div>
  );
};

export default Main_config;
