import Button from "./Button";
import ListProject from "./ListProject";

export default function Sidebar({
  projectList,
  onStartProject,
  onSelectedProject,
  selectedProjectId,
}) {
  return (
    <div className={`p-10 bg-gray-900 text-gray-50 rounded h-screen w-1/4 `}>
      <h2 className="uppercase font-semibold">Your Project</h2>
      <Button title="+ Add Project" classes="mt-7" onClick={onStartProject} />
      <ListProject
        projectList={projectList}
        onClickItem={onSelectedProject}
        selectedProjectId={selectedProjectId}
      />
    </div>
  );
}
