import { configureStore } from "@reduxjs/toolkit";
import medicineReducer from "./medicineslice";

export const store = configureStore({
  
  reducer: {
    medicine: medicineReducer,
  },
});