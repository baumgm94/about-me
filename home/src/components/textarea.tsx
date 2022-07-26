type inputProps = {
  labelName: string;
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function TextArea({
  labelName,
  name,
  placeholder,
  onChange,
}: inputProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <label className="w-96 h-10 text-start text-xl text-slate-450">
        {labelName}
      </label>
      <textarea
        className="pt-2 pl-2 w-96 h-40 mt-0 mb-5  border-solid border-2 rounded-lg  shadow-md resize-none bg-[#f9f9f9]"
        name={name}
        placeholder={placeholder}
        onChange={(event) => {
          onChange(event);
        }}
      ></textarea>
    </div>
  );
}
