import { createSlice } from "@reduxjs/toolkit";

export const typeSlice = createSlice({
  name: "type",
  initialState: { value: { userType: "" } },
  reducers: {
    setType: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setType } = typeSlice.actions;
export default typeSlice.reducer;
