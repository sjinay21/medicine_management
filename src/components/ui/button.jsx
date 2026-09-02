function Buttonvariants({children,variant = "",onClick}) {
  const variants = {
    primary:"text-4xl text-red-600 hover:text-red-800",
    outline: "bg-blue-950 hover:bg-blue-600 text-white px-5 py-2 rounded",
    secondary: "bg-green-800 hover:bg-green-600 text-white px-5 py-2 rounded",
    symptoms:"bg-blue-600 hover:bg-blue-800 py-2 px-2 rounded text-xl text-white",
    edit:"bg-green-600 hover:bg-green-800 py-2 px-2 rounded text-xl text-white",
    delete:"bg-red-600 hover:bg-red-800 py-2 px-2 rounded text-xl text-white",
    update:"bg-teal-800 hover:bg-teal-950 py-2 px-2 rounded text-l text-white",
    add:"bg-blue-950 hover:bg-blue-600 text-white px-5 py-2 rounded",
  };
  return (
    <button className={variants[variant]} onClick={onClick}>
      {children}
    </button>
  );
}
export default Buttonvariants;