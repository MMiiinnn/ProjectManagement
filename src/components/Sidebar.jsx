export default function Sidebar({ onAddProject, projectDatas, onClickItem }) {
  return (
    <div className={`p-10 bg-gray-900 text-gray-50 rounded h-screen w-96 `}>
      <h2 className="uppercase font-semibold">Your Project</h2>
      <button
        className="mt-7 bg-gray-500 py-2 px-3 rounded-md hover:bg-gray-50 hover:text-gray-900"
        onClick={onAddProject}
      >
        + Add Project
      </button>
      <ol className="mt-7">
        {projectDatas.length > 0 ? (
          projectDatas.map((item, index) => (
            <li key={index}>
              <button
                className="w-full text-left hover:bg-slate-300 hover:text-black p-2 rounded"
                onClick={onClickItem}
              >
                {item.title}
              </button>
            </li>
          ))
        ) : (
          <p>No project at all.</p>
        )}
      </ol>
    </div>
  );
}
