import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function About() {
  return (
    <>
     <Navbar/>
    <div className="px-6 py-10">

      <div className="p-4">
        <h1 className="text-4xl font-bold text-blue-950">
          Medicine Management Made Simple
        </h1>

        <p className=" text-lg text-black">
          A simple and easy-to-use medicine management application.
        </p>
      </div>

      <div className="rounded-lg bg-white p-4">
        <h2 className="text-2xl font-bold text-blue-900">
          About Our Store
        </h2>

        <p className=" text-black">
          MedicineStore is a medicine management application designed to
          make it easy to manage and organize medicines. You can view
          medicines, add new medicines, edit existing medicines, and
          delete medicines from the list.
        </p>
      </div>

      <div className=" rounded-lg bg-white p-4 ">
        <h2 className="text-2xl font-bold text-blue-900">
          Features
        </h2>

        <ul className=" list-disc space-y-2 pl-6 text-black">
          <li>View medicine list</li>
          <li>Add new medicines</li>
          <li>Edit existing medicines</li>
          <li>Delete medicines</li>
          <li>Search medicines</li>
          <li>Manage medicine symptoms</li>
        </ul>
      </div>

      <div className=" rounded-lg bg-white p-4 ">
        <h2 className="text-2xl font-bold text-blue-900">
          About This Project
        </h2>

        <p className="mt-3 text-black">
          This project is built using React and Next.js. It demonstrates
          concepts such as reusable components, state management, form
          validation, routing, Redux Toolkit, and Tailwind CSS.
        </p>
      </div>

    </div>

        <Footer/>
    </>
  );
}