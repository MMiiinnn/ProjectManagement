export default function ListProject({
  projectList,
  onClickItem,
  selectedProjectId,
}) {
  return (
    <ul className="mt-7">
      {projectList.length > 0 ? (
        projectList.map((project, index) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={index}>
              <button
                className={cssClasses}
                onClick={() => onClickItem(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })
      ) : (
        <p>No project at all.</p>
      )}
    </ul>
  );
}
