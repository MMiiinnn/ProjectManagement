import { useState, useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";
import Button from "./Button";
const label = ["title", "description", "duedate"];
const initialProject = { title: "", description: "", duedate: "" };

export default function AddProject({ onAdd, onCancel }) {
  const [projectInfor, setProjectInfor] = useState(initialProject);
  const dialog = useRef();

  function handleChange(name, newValue) {
    setProjectInfor((prevInfor) => {
      return { ...prevInfor, [name]: newValue };
    });
  }

  function handleSave() {
    if (
      projectInfor.title.trim() === "" ||
      projectInfor.description.trim() === "" ||
      projectInfor.duedate.trim() === ""
    ) {
      dialog.current.open();
      return;
    }

    onAdd({
      title: projectInfor.title,
      description: projectInfor.description,
      duedate: projectInfor.duedate,
    });
  }

  function handleCloseModal() {
    dialog.current.close();
  }

  return (
    <>
      <Modal ref={dialog}>
        <h2 className="text-xl">Opps... Please fill out all the input.</h2>
        <Button classes="text-right" title="Okay" onClick={handleCloseModal} />
      </Modal>
      <div className={`p-10 left-36 w-3/4`}>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
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
          <Input
            title={label[0]}
            inputType="text"
            onChangeInput={handleChange}
          />
          <Input
            title={label[1]}
            inputType="textarea"
            onChangeInput={handleChange}
          />
          <Input
            title={label[2]}
            inputType="date"
            onChangeInput={handleChange}
          />
        </div>
      </div>
    </>
  );
}
