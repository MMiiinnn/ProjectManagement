export default function DetailProject({ isAddProject }) {
  return (
    <section className="p-10 w-screen">
      {isAddProject ? (
        <>
          <div className="flex justify-between">
            <h2 className="uppercase text-2xl font-semibold">Learning React</h2>
            <button className="p-3 hover:text-red-600 ">Delete</button>
          </div>
          <div>
            <p className="">Description</p>
            <hr className="my-3 border-2 border-gray-200" />
          </div>
          <div>
            <h3 className="font-bold text-2xl my-5">Task</h3>
            <input className="p-2 bg-gray-100 mr-5" type="text" />
            <button className="border py-2 px-3">Add task</button>

            <ol className="mt-10 bg-gray-100">
              <li className="flex justify-between py-2 px-4">
                <p>title</p>
                <button className="hover:text-red-600 ">Delete</button>
              </li>
            </ol>
          </div>
        </>
      ) : (
        ""
      )}
    </section>
  );
}
