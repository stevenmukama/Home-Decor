const Input = ({ type, placeholder, value, onChange, classes = "" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`py-1 px-6 text-sm bg-gray-300 rounded-lg mb-2 ${classes} `}
    />
  );
};

export default Input;
