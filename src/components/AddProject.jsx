import { useState } from "react";

import Input from "./Input";

const label = ["title", "description", "duedate"];
const initialProject = { title: "", description: "", duedate: "" };

export default function AddProject({ onClickSave, onClickCancel }) {
  const [projectInfor, setProjectInfor] = useState(initialProject);

  function handleChange(name, newValue) {
    setProjectInfor((prevInfor) => {
      return { ...prevInfor, [name]: newValue };
    });
  }

  function handleSave() {
    onClickSave?.(projectInfor);
  }

  return (
    <div className={`p-10 left-36 w-full`}>
      <div className="flex justify-end">
        <button
          onClick={onClickCancel}
          className="mr-2 py-2 px-5 hover:bg-gray-200 rounded-md"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-gray-900 text-gray-50 py-2 px-5 rounded-md hover:bg-gray-200 hover:text-gray-900"
        >
          Save
        </button>
      </div>
      <div className="flex flex-col">
        <Input title={label[0]} inputType="text" onChangeInput={handleChange} />
        <Input
          title={label[1]}
          inputType="textarea"
          onChangeInput={handleChange}
        />
        <Input title={label[2]} inputType="date" onChangeInput={handleChange} />
      </div>
    </div>
  );
}
