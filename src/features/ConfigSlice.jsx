import { createSlice } from "@reduxjs/toolkit";
import formJSON from "../formData.json";
const configSlice = createSlice({
  name: "config",
  initialState: {
    mainConfig: [],
    subConfigInterface: formJSON.type_fields,
    subConfig: {},
  },
  reducers: {
    addToMainConfig(state, { payload }) {
      
      state.mainConfig = [...state.mainConfig, payload];
      state.subConfigInterface = state.subConfigInterface.map((field) => {
        if (field.field_id === "cams") {
          field.field_options = state.mainConfig;
        }
        return field;
      });
    },
    addNewSubConfig(state, { payload }) {
      state.subConfig = { ...state.subConfig, ...payload };
      state.mainConfig = [];
    },
  },
});

export const { addToMainConfig, addNewSubConfig } = configSlice.actions;
export default configSlice.reducer;
