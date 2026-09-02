function Input({type = "",placeholder,value,onChange,variant=""}) {
    const variants = {
    primary:"px-4 py-2 rounded border",
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={variants[variant]}
    />
  );
}

export default Input;