export default function ListProject({ projectList, onClickItem }) {
  return (
    <ul className="mt-7">
      {projectList.length > 0 ? (
        projectList.map((project, index) => (
          <li key={index}>
            <button
              className="w-full text-left hover:bg-slate-300 hover:text-black p-2 rounded"
              onClick={onClickItem}
            >
              {project.title}
            </button>
          </li>
        ))
      ) : (
        <p>No project at all.</p>
      )}
    </ul>
  );
}
