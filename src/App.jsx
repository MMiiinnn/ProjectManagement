import { useState } from "react";

import Sidebar from "./components/Sidebar";
import InitialContent from "./components/InitialContent";

import AddProject from "./components/AddProject";

function App() {
  const [addContent, setAddContent] = useState(false);
  const [sidebarList, setSidebarList] = useState([]);
  const [itemClick, setItemClick] = useState(false);

  function handleClick() {
    setAddContent(true);
  }

  function handleClickSave(items) {
    setSidebarList((prev) => [...prev, items]);
    setAddContent(false);
  }
  function handleClickCancel() {
    setAddContent(false);
  }

  function handleClickItem() {}

  return (
    <div className="flex">
      <Sidebar
        onAddProject={handleClick}
        projectDatas={sidebarList}
        onClickItem={handleClickItem}
      />
      {addContent ? (
        <AddProject
          onClickSave={handleClickSave}
          onClickCancel={handleClickCancel}
        />
      ) : (
        <InitialContent onAddProject={handleClick} />
      )}
    </div>
  );
}

export default App;
