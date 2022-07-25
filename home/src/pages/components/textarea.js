export { TextArea };
function TextArea({ fieldName, name, placeHolder, onChange }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <label className="w-96 h-10 text-start text-xl text-slate-450">
        {fieldName}
      </label>
      <textarea
        className="pt-2 pl-2 w-96 h-40 mt-0 mb-5  border-solid border-2 rounded-lg  shadow-md resize-none bg-[#f9f9f9]"
        name={name}
        placeholder={placeHolder}
        onChange={(event) => {
          onChange(event);
        }}
      ></textarea>
    </div>
  );
}
