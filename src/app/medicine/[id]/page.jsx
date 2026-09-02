"use client";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import hardmedicines from "@/data/hardmedicine";
export default function Medicine() {
  const params = useParams();
  const usermedicines = useSelector(
    (state) => state.medicine.medicines
  );
const totalmedicines=[...hardmedicines,...usermedicines]
  const medicine = totalmedicines.find(
    (item) => item.id == params.id
  );
  if (!medicine) {
    return <h1>Medicine not found</h1>;
  }

  return (

    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-950 mb-6">
        {medicine.name}
      </h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Basic Details
        </h2>
        <p>
          <span className="font-bold">Name:</span>
          {medicine.name}
        </p>
        <p>
          <span className="font-bold">Strength:</span>
          {medicine.gram}
        </p>
        <p>
          <span className="font-bold">Category:</span> {medicine.symptoms}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Uses
        </h2>
        <p className="mb-3">
          {medicine.name} is commonly used for:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li> Muscle/body pain</li>
          <li> Fever and body aches associated with cold or flu</li>
          <li> Sore throat and mild-to-moderate pain</li>
        </ul>

        <p className="mt-4">
          {medicine.name} reduces pain and high temperature but does not treat
          the underlying infection.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          Advantages
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Helps reduce fever.</li>
          <li>Provides relief from mild-to-moderate pain.</li>
          <li>
            Generally well tolerated when taken at the recommended dose.
          </li>
          <li>Can be taken with or without food.</li>
          <li>
            Generally has less risk of stomach irritation than many NSAID
            painkillers.
          </li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-700 mb-3">
          Disadvantages / Risks
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>It does not cure the cause of an infection.</li>
          <li>
            Taking too much can cause serious liver damage.
          </li>
          <li>
            People with liver or kidney problems may need special advice.
          </li>
          <li>
            Some people can rarely experience allergic reactions or other
            serious side effects.
          </li>
          <li>
            It should not be combined with other medicines that also contain
            {medicine.name} without appropriate medical advice.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-700 mb-3">
          Important Precautions
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Follow the dosage on the package or your doctor's/pharmacist's
            advice.
          </li>
          <li>Leave the recommended interval between doses.</li>
          <li>
            Avoid taking multiple medicines containing paracetamol together.
          </li>
          <li>
            If fever or pain continues for several days, seek medical advice.
          </li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-3">
          Possible Side Effects
        </h2>

        <p className="mb-3">
          When taken correctly, side effects are uncommon. Rare but serious
          effects can include:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Allergic reaction</li>
          <li>Skin rash</li>
          <li>Liver problems</li>
          <li>Blood-cell abnormalities</li>
        </ul>
      </section>

    </div>
  );
}

