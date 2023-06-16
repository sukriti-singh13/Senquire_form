import { createSlice } from "@reduxjs/toolkit";
import formJSON from "../formData.json";
const configSlice = createSlice({
  name: "config",
  initialState: { mainConfig: [], subConfigInterface: formJSON.type_fields,subconfig:{}},
  reducers: {
    addToMainConfig(state, action) {
      //   const formData = JSON.parse(JSON.stringify(state.subConfig));
      state.mainConfig = action.payload;
    },
    addNewSubConfig(state, {payload}) {

        console.log(payload)
        // state.subconfig[payload] = {};
    }
  },
});

export const { addToMainConfig } = configSlice.actions;
export default configSlice.reducer;
