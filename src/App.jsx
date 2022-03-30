import "./scss/App.scss";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import { useState, useEffect } from "react";

function App() {
  const getLocalStorage = () => {
    localStorage.getItem("data") &&
      setData(JSON.parse(localStorage.getItem("data")));
  };
  const [data, setData] = useState([
    {
      "taskId": 1,
      "taskTitle": "Start Study",
      "taskDate": "2022-03-31T06:32",
      "isDone": false
    },
    {
      "taskId": 2,
      "taskTitle": "Have Breakfast",
      "taskDate": "2022-03-31T09:40",
      "isDone": false
    }
  ]);
  const setLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };

  const addTask =  (newTask) => {
    setData(data.concat(newTask));
  };
  let lastTaskId = data.length !== 0 ? data[data.length - 1].taskId : 0;
  useEffect(() => {
    getLocalStorage();
  }, []);
  useEffect(() => {
    setLocalStorage(data);
  }, [data]);

  const delTask = (taskId) => {
    setData(data.filter((task) => task.taskId !== taskId));
  };
  const isDone = (taskId) => {
    setData(
      data.map((task) => {
        if (task.taskId === taskId) {
          task.isDone = !task.isDone;
        }
        return task;
      })
    );
  };
const deleteAllTasks =()=>{
  setData([])
}

  return (
    <div className="App">
      <div className="container">
        <Header onNewTask={(newTask) => addTask(newTask)} taskId={lastTaskId} />
        {data.length > 0 ? (
          <div>
          <Tasks
            dataProp={data}
            delTaskProp={(taskId) => delTask(taskId)}
            isDoneProp={(taskId) => isDone(taskId)}
          />
          <button style={{
    backgroundColor: "red",
    color: "white",
    padding: "0.5rem",
    borderRadius: "5px",
    border: "none"
  }} onClick={deleteAllTasks}>Delete All Tasks</button>
          </div>
        ) : (
          <div className="no-task">
            <h3>No Tasks to Show</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


