import logo from "../assets/no-projects.png";

export default function InitialContent({ onAddProject }) {
  return (
    <div className={`flex flex-col justify-center items-center w-full`}>
      <img src={logo} alt="Initial logo" className="w-32 h-32" />
      <h2 className="mt-4 font-bold text-2xl">No Project Selected</h2>
      <p className="mt-2 opacity-65 text-lg">
        Select a project or get started with a new one
      </p>
      <button
        className="mt-6 py-2 px-4 bg-gray-400 text-gray-50 rounded hover:bg-slate-800"
        onClick={onAddProject}
      >
        Create new project
      </button>
    </div>
  );
}
