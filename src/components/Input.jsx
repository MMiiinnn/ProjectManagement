export default function Input({ title, inputType, onChangeInput }) {
  const type = inputType === "textarea";

  return (
    <>
      <label className="uppercase mb-1">{title}</label>
      {type ? (
        <textarea
          className="p-2 border-0 border-b-2 mb-3 border-gray-300 focus:border-black focus:outline-none transition-colors 
    duration-300 bg-gray-200"
          onChange={(event) => onChangeInput(title, event.target.value)}
        />
      ) : (
        <input
          className="p-2 border-0 border-b-2 mb-3 border-gray-300 focus:border-black focus:outline-none transition-colors 
    duration-300 bg-gray-200"
          type={inputType}
          onChange={(event) => onChangeInput(title, event.target.value)}
        />
      )}
    </>
  );
}
