"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import hardmedicines from "@/data/hardmedicine";
import { addMedicine } from "@/redux/medicineslice";

export default function useHero() {
  const dispatch = useDispatch();

  const userMed = useSelector(
    (state) => state.medicine.medicines
  );
  useEffect(() => {
  const saved = localStorage.getItem("Medicines");
  if (saved) {
    dispatch(addMedicine(JSON.parse(saved)));
  } else {
    localStorage.setItem("Medicines",JSON.stringify(hardmedicines));
    dispatch(addMedicine(hardmedicines));
  }
}, [dispatch]);
  const data = userMed;
  return {
    data,
  };
}