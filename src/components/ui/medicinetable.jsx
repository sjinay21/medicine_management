"use client";

import { useState ,useEffect} from "react";
import Link from "next/link";
import Buttonvariants from "@/components/ui/button";
import Input from "@/components/ui/input";
import Pagination from "@/components/ui/pagination";

export default function MedicineTable({
  medicines,
  editMedicineId,
  editname,
  setEditName,editgram,setEditGram,deletemedicines,updateItem,editlist,savesymptoms,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const dataShown = 3;
useEffect(() => {
  setCurrentPage(1);
}, [medicines]);
 function getDisplayedMedicines(medicines, currentPage, dataShown) {
    const start = (currentPage - 1) * dataShown;
    const end = currentPage * dataShown;
  
    return medicines.slice(start, end);
  }
  const displayedMedicines = getDisplayedMedicines(medicines,currentPage,dataShown);
  function handleChangePage(event,newPage) {
    setCurrentPage(newPage + 1);
  }
  const symptomsList = ["fever","cough","wheezing","headache","cold",];
  return (
    <>
      <table className="w-full border">
        <thead>
          <tr className="text-blue-950 text-xl">
            <th className="text-left p-4 border">
              Sr.No
            </th>

            <th className="text-left p-2 border">
              Name
            </th>

            <th className="text-left p-2 border">
              Gram
            </th>

            <th className="text-left p-4 border">
              Code
            </th>

            <th className="text-left p-2 border">
              Symptoms
            </th>

            <th className="text-left p-4 border">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {displayedMedicines.map((medicine, index) => (
            <tr key={medicine.id}>
              <td className="border p-4">
                {(currentPage - 1) * dataShown + index + 1}
              </td>

              <td className="border p-4">
                {editMedicineId == medicine.id ? (
                  <Input
                    type="text"
                    placeholder="Edit name"
                    value={editname}
                    onChange={(event) =>setEditName(event.target.value)}
                    variant="primary"
                  />
                ) : (
                  <Link href={`/medicine/${medicine.id}`}>
                    {medicine.name}
                  </Link>
                )}
              </td>

              <td className="border p-4">
                {editMedicineId == medicine.id ? (
                  <Input
                    type="number"
                    placeholder="Edit gram"
                    value={editgram}
                    onChange={(event) =>setEditGram(event.target.value)}
                    variant="primary"
                  />
                ) : (
                  medicine.gram
                )}
              </td>

              <td className="border p-4">
                {medicine.code}
              </td>

             <td className="border p-4">
  <div className="flex flex-wrap items-center justify-center gap-6">
    {symptomsList.map((symptom) => (
      <div key={symptom} className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={medicine.symptoms.includes(symptom)}
          disabled={editMedicineId != medicine.id}
          onChange={(event) =>savesymptoms(medicine,symptom,event.target.checked)}
          className="h-4 w-4 accent-blue-900"
        />
        <label>{symptom}</label>
      </div>
    ))}
  </div>
</td>
              <td className="border p-4">
                <div className="flex items-center justify-center gap-3">
                  {editMedicineId == medicine.id ? (
                    <Buttonvariants
                      onClick={updateItem}
                      variant="update"
                    >
                      Save Change
                    </Buttonvariants>
                  ) : (
                    <Buttonvariants
                      onClick={() => editlist(medicine)}
                      variant="edit"
                    >
                      Edit
                    </Buttonvariants>
                  )}

                  <Buttonvariants
                    onClick={() => deletemedicines(medicine.id)}
                    variant="delete"
                  >
                    Delete
                  </Buttonvariants>
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        count={medicines.length}
        page={currentPage - 1}
        rowsPerPage={dataShown}
        onPageChange={handleChangePage}
      />
    </>
  );
}