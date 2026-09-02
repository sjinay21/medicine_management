"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMedicine } from "@/redux/medicineslice";
import hardmedicines from "@/data/hardmedicine";
import { valueschema } from "@/schemas/medicineSchema";
export default function useMedicines() {
  const [medicines, setMedicines] = useState([]);
  const [name, setName] = useState("");
  const [gram, setGram] = useState("");
  const [editMedicineId, setEditMedicineId] = useState(null);
  const [editname, setEditName] = useState("");
  const [search, setSearch] = useState("");
  const [editgram, setEditGram] = useState("");
  const[symptoms ,setSymptoms ]=useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
useEffect(() => {
  const saved = localStorage.getItem("Medicines");
  if (saved) {
    const savedMedicines = JSON.parse(saved);
    setMedicines(savedMedicines);
    dispatch(addMedicine(savedMedicines));
  } else {
    setMedicines(hardmedicines);
    localStorage.setItem(
      "Medicines",
      JSON.stringify(hardmedicines)
    );
    dispatch(addMedicine(hardmedicines));
  }
}, [dispatch]);

const filteredMedicines = medicines.filter((medicine) =>
  medicine.code.toUpperCase().includes(search.toUpperCase())
);

  function deletemedicines(id) {
    const updatedMedicines = medicines.filter((medicine) => medicine.id !== id);
    setMedicines(updatedMedicines);
    localStorage.setItem("Medicines", JSON.stringify(updatedMedicines));
    dispatch(addMedicine(updatedMedicines));
  }
  async function addmedicines() {
  const valid = await validate();
  if (!valid) {
    return;
  }
    const newMedicine = {
      id: crypto.randomUUID(),
      name: name,
      gram: gram,
      code: name.toUpperCase(),
      symptoms: [],
    };

    const updatedMedicines = [...medicines,newMedicine];
    setMedicines(updatedMedicines);
    localStorage.setItem("Medicines", JSON.stringify(updatedMedicines));
    dispatch(addMedicine(updatedMedicines));

    setName("");
    setGram("");
    setSymptoms([]);

  
    setEditName("");
    setEditGram("");
  }
  function editlist(medicine) {
    setEditMedicineId(medicine.id);
    setEditName(medicine.name);
    setEditGram(medicine.gram);
  }
  function updateItem() {
    const updatedMedicines = medicines.map((medicine) => {
      if (medicine.id == editMedicineId) {
        return {
          ...medicine,
          name: editname,
          gram: editgram,
          code: editname.toUpperCase(),
        };
      }

      return medicine;
    });

    setMedicines(updatedMedicines);

    localStorage.setItem("Medicines",JSON.stringify(updatedMedicines));
    dispatch(addMedicine(updatedMedicines));

    setEditMedicineId(null);
    setEditName("");
    setEditGram("");
  }
function savesymptoms(medicine, symptom, checked) {
  const updatedMedicines = medicines.map((item) => {
    if (item.id == medicine.id) {
      const symptoms = item.symptoms || [];

      const updatedSymptoms = checked
        ? [...symptoms, symptom]
        : symptoms.filter((item) => item !== symptom);

      return {
        ...item,
        symptoms: updatedSymptoms,
      };
    }

    return item;
  });

  setMedicines(updatedMedicines);
  localStorage.setItem(
    "Medicines",
    JSON.stringify(updatedMedicines)
  );
  dispatch(addMedicine(updatedMedicines));
}
  function savemedicines() {
    localStorage.setItem("Medicines",JSON.stringify(medicines));
    dispatch(addMedicine(medicines));
  }  async function validate() {
  const value = { name, gram };
  try {
  await valueschema.validate(value, {abortEarly: false});
  setErrors({});
  return true;
} catch (error) {
  const validationErrors = {};
  error.inner.forEach((err) => {
    validationErrors[err.path] = err.message;
  });
  setErrors(validationErrors);
  return false;
}}
  return {
    medicines,setMedicines,validate,
    name,setName,errors,
    gram,setGram,
    symptoms,setSymptoms,
 search,setSearch,filteredMedicines,
    editMedicineId,setEditMedicineId,
    editname,setEditName,
    editgram,setEditGram,
    deletemedicines,addmedicines,savemedicines,updateItem,editlist,savesymptoms
  }
}