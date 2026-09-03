export default function Footer() {
  return (
    <footer className="mt-10 bg-blue-900 px-8 py-10 text-white">
      <div className="mx-auto flex items-center justify-between">

        <div>
          <h2 className="text-4xl font-bold">
            MedicineStore
          </h2>

          <p className="mt-3 text-lg">
            Simple and easy-to-use medicine management.
          </p>
        </div>

        <div className="text-right ">
          <p className="text-4xl font-bold">Medicine Management System</p>
          <p className="mt-3 text-lg">
            © 2026 MedicineStore. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}