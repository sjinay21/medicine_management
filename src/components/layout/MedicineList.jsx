"use client";

import Buttonvariants from "@/components/ui/button";
import Input from "@/components/ui/input";
import useMedicines from "@/components/hooks/useMedicines";
import MedicineTable from "@/components/ui/medicinetable";

export default function MedicineList() {
  const {
    medicines,name,setName,
    search,setSearch,filteredMedicines,
    errors,
    gram,setGram,
    editname,setEditName,
    editgram,setEditGram,
    editMedicineId,deletemedicines,addmedicines,updateItem,editlist,savesymptoms,
  } = useMedicines();

  const medicinesToShow =
    search === "" ? medicines : filteredMedicines;

  return (
    <div className="text-center px-6 py-8">

      <div className="flex justify-between items-center w-full mb-8">
        <h1 className="text-blue-950 text-4xl font-bold flex-1">
          Medicine List
        </h1>
      </div>

      <div className="flex justify-center items-start gap-3 mb-8">

        <Input
          type="search"
          placeholder="Search name"
          variant="primary"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="w-60">
          <Input
            type="text"
            placeholder="Enter medicine name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            variant="primary"
          />

          <div className="h-6 mt-1">
            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name}
              </p>
            )}
          </div>
        </div>

        <div className="w-60">
          <Input
            type="number"
            placeholder="Enter gram"
            value={gram}
            onChange={(event) => setGram(event.target.value)}
            variant="primary"
          />

          <div className="h-6 mt-1">
            {errors.gram && (
              <p className="text-red-500 text-sm">
                {errors.gram}
              </p>
            )}
          </div>
        </div>

        <Buttonvariants
          variant="outline"
          onClick={addmedicines}
        >
          Add
        </Buttonvariants>

      </div>

      <MedicineTable
        medicines={medicinesToShow}
        editMedicineId={editMedicineId}
        editname={editname}
        setEditName={setEditName}
        editgram={editgram}
        setEditGram={setEditGram}
        deletemedicines={deletemedicines}
        updateItem={updateItem}
        editlist={editlist}
        savesymptoms={savesymptoms}
      />

    </div>
  );
}