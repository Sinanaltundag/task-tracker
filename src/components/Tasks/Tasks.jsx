import React from "react";
import Task from "./Task";

const Tasks = (props) => {
  return (
    <div>
      {props.dataProp?.map((task) => (
        <Task taskProps={task} key={task.taskId} {...props} />
      ))}
    </div>
  );
};

export default Tasks;
