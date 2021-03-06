import { useState } from "react";
import AddTask from "./AddTask";
import Button from "./Button";

const Header = (props) => {
  const [showAddBtn, setShowAddBtn] = useState(true);

  const addBtnChanger = (e) => {
    setShowAddBtn(!showAddBtn);
  };
  let btnName = showAddBtn ? "Show Add Task Bar" : "Close Add Task Bar";

  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <Button click={addBtnChanger} btnName={btnName} />

      {!showAddBtn && (
        <AddTask onNewTask={props.onNewTask} taskId={props.taskId} />
      )}
    </div>
  );
};

export default Header;
