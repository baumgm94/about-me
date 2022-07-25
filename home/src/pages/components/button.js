export { SubmitButton };
function SubmitButton({ buttonName }) {
  return (
    <div className="flex justify-center items-start">
      <button
        type="submit"
        className=" text-white w-32 h-12 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3 mb-8 mr-64 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {buttonName}
      </button>
    </div>
  );
}
