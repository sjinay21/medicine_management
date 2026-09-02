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
      const savedMedicines = JSON.parse(saved);
      dispatch(addMedicine(savedMedicines));
    }
  }, [dispatch]);

  const data = [...hardmedicines, ...userMed];

  return {
    data,
  };
}