import { useState } from "react";
import Tasks from "./Tasks";

export default function DetailProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  return (
    <section className="p-10 w-screen">
      <div className="flex justify-between">
        <h2 className="uppercase text-2xl font-semibold">{project.title}</h2>
        <button className="p-3 hover:text-red-600 " onClick={onDelete}>
          Delete
        </button>
      </div>
      <div>
        <p>{project.duedate}</p>
        <p>{project.description}</p>
        <hr className="my-3 border-2 border-gray-200" />
      </div>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </section>
  );
}
