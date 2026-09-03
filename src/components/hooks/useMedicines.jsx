"use client";
import { useState, useEffect ,useReducer } from "react";
import { useDispatch } from "react-redux";
import { addMedicine } from "@/redux/medicineslice";
import hardmedicines from "@/data/hardmedicine";
import { valueschema } from "@/schemas/medicineSchema";
import { useRouter,useSearchParams } from "next/navigation";
export default function useMedicines() {
  const [medicines, setMedicines] = useState([]);
  const [form,setForm] = useState({name:"",gram:"",symptoms:""})
  const [editMedicineId, setEditMedicineId] = useState(null);
  const [editform,setEditForm]= useState({editname:"",editgram:""})
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const [searchInput, setSearchInput] = useState(search);
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
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
 const debouncedSearch = debounce(updateSearch, 500);
 function updateSearch(value) {
  if (value == "") {
    router.replace("/list");
    return;
  }
  router.replace(`/list?search=${value}`);
}
function handleSearch(value) {
  setSearchInput(value);
  debouncedSearch(value);
}

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
     name: form.name,
  gram: form.gram,
      code: form.name.toUpperCase().replace(/ /g, "_"),
      symptoms: [],
    };

    const updatedMedicines = [...medicines,newMedicine];
    setMedicines(updatedMedicines);
    localStorage.setItem("Medicines", JSON.stringify(updatedMedicines));
    dispatch(addMedicine(updatedMedicines));
    setForm({
      name:"",
      gram:"",
      symptoms:"",
    })
  }
  function editlist(medicine) {
    setEditMedicineId(medicine.id);
    setEditForm({
      editname:medicine.name,
      editgram:medicine.gram,
    })

    
  }
  function updateItem() {
    const updatedMedicines = medicines.map((medicine) => {
      if (medicine.id == editMedicineId) {
        return {
          ...medicine,
          name: editform.editname,
          gram: editform.editgram,
          code: editform.editname.toUpperCase().replace(/ /g, "_"),
        };
      }
      return medicine;
    });

    setMedicines(updatedMedicines);

    localStorage.setItem("Medicines",JSON.stringify(updatedMedicines));
    dispatch(addMedicine(updatedMedicines));

    setEditMedicineId(null);
    setEditForm({
      editname:"",
      editgram:"",
    })
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
  const value = {
    name: form.name,
    gram: form.gram,
  };;
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
    errors,
    setForm,form,handleSearch,
    search,filteredMedicines,
    editMedicineId,setEditMedicineId,
    editform,setEditForm,searchInput,
    deletemedicines,addmedicines,savemedicines,updateItem,editlist,savesymptoms
  }
}