export { TextInput };
function TextInput({ lableName, name, placeholder, required, onChange }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <label className="w-96 h-10 text-start text-xl text-slate-450">
        {lableName}
      </label>
      <input
        className={
          "pl-2 w-96 h-10 mt-0 mb-5  border-solid border-2 rounded-lg  shadow-md bg-slate-100"
        }
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={(event) => {
          onChange(event);
        }}
      ></input>
    </div>
  );
}
