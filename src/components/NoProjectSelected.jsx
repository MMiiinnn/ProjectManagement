import logo from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartProject }) {
  return (
    <div className={`flex flex-col justify-center items-center w-3/4`}>
      <img src={logo} alt="Initial logo" className="w-32 h-32" />
      <h2 className="mt-4 font-bold text-2xl">No Project Selected</h2>
      <p className="mt-2 opacity-65 text-lg">
        Select a project or get started with a new one
      </p>
      <Button
        title="Create new project"
        classes="mt-6 py-2 px-4 hover:bg-stone-900 hover:text-stone-50"
        onClick={onStartProject}
      />
    </div>
  );
}
