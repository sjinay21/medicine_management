"use client";

import Link from "next/link";
import useHero from "@/components/hooks/useHero";
import MedicineTable from "@/components/ui/medicinetable";

export default function Navbar() {
  const { list } = useHero();

  return (
    <nav className="bg-blue-900 px-8 py-5">
      <div className="mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">
          MedicineStore
        </h1>

        <div className="flex gap-8 text-lg text-white">
          <Link href="/">Home</Link>
          <Link href="/list" onClick={list}>List</Link>
          <Link href="/about">About</Link>
        </div>
      </div>

      
    </nav>
  );
}