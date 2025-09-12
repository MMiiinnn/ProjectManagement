import { useState, useRef } from "react";

import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import AddProject from "./components/AddProject";

function App() {
  const dialog = useRef();

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddProject(projectData) {
    setProjectState((prevProjectState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: [...prevProjectState.projects, newProject],
      };
    });
  }

  function handlCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = (
      <AddProject
        onAdd={handleAddProject}
        onCancel={handlCancel}
        selectedProject={projectState.selectedProjectId}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartProject={handleStartProject} />;
  }

  return (
    <div className="flex">
      <Sidebar
        projectList={projectState.projects}
        onStartProject={handleStartProject}
        onSelectedProject={handleSelectedProject}
      />
      {content}
    </div>
  );
}

export default App;
