"use client";
import useHero from "@/components/hooks/useHero";
import HeroTable from "@/components/ui/herotable";
export default function Hero() {
  const { data } = useHero();
  return (
    <div>
      <div className="flex justify-center items-center gap-4 py-4 mb-8">
        <h1 className="text-blue-950 font-bold text-2xl">
          List of Medicine
        </h1>

        {/*<Buttonvariants
          variant="add"
          onClick={list}
        >
          Add
        </Buttonvariants>*/}
      </div>

      {/*{isOpen && (
        <MedicineList onClose={() => setIsOpen(false)}/>
      )}*/}
      <HeroTable data={data} />
    </div>
  );
}