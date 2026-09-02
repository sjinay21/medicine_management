
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  medicines: [],
};
const Slice = createSlice({
  name: "medicineSlice",
  initialState,
  reducers: {
    addMedicine: (state, action) => {
      state.medicines = action.payload;
    },
  },
});
export const { addMedicine } = Slice.actions;
export default Slice.reducer;