const Input = ({info}) => {
  return (
      <info.inputType
        type={info.type}
        placeholder={info.placeholder}
        required
        className="w-4/5 p-7 rounded-xl bg-gray-200"

      />
   
  );
}
export default Input