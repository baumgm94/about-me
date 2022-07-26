type inputProps = {
  labelName: string;
  name: string;
  placeholder: string;
  required: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function TextInput({
  labelName,
  name,
  placeholder,
  required,
  onChange,
}: inputProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <label className="w-96 h-10 text-start text-xl text-slate-450">
        {labelName}
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
