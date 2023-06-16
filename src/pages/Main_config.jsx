import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToMainConfig } from "../features/ConfigSlice";
// import MainInput from "./MainInput";
const Main_config = () => {
  const [mainConfig, setMainConfig] = useState([]);
  const [camera, setCamera] = useState({ cameraName: "" });
  const dispatch = useDispatch();

  const addCamera = () => {
    setMainConfig([...mainConfig, camera]);
    setCamera({ cameraName: "" });
    dispatch(addToMainConfig(mainConfig));
  };

  console.log(mainConfig);
  const handleCameraChange = (e) => {
    setCamera({ ...camera, [e.target.name]: e.target.value });
  };

  return (
    <div className="main_config">
      <h1> Add Camera</h1>
      {mainConfig.map((item, index) => (
        <div className="display_data">
          <p> Camera {index + 1}</p>
          <div className="main-content">
            <div className="name"> Name: {item.cameraName}</div>
          </div>
        </div>
      ))}

      <div className="user_input">
        <label>Camera Name </label>
        <input
          className="input-text"
          name="cameraName"
          type="text"
          value={camera.cameraName}
          onChange={(e) => handleCameraChange(e)}
        />
      </div>

      <button className="add_camera" onClick={addCamera}>
        Add
      </button>
    </div>
  );
};

export default Main_config;
