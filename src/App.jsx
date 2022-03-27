import "./scss/App.scss";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import {useState, useEffect } from "react"

function App() {
  const getLocalStorage =()=>{
    localStorage.getItem("data") && setData(JSON.parse(localStorage.getItem("data")))
  }
  const [data, setData] = useState([])
const setLocalStorage =(data)=>{
  localStorage.setItem("data",JSON.stringify(data) )
}

// console.log(data)
const addTask = async(newTask)=>{
  setData(data.concat(newTask))
  // console.log(data)
}
let lastTaskId = data.length!==0 ? data[data.length - 1].taskId:0
useEffect(() => {
  getLocalStorage()
}, [])
useEffect(() => {
 setLocalStorage(data)
}, [data])

const delTask = (taskId) => {
  console.log(taskId)
 setData(data.filter(task => task.taskId !== taskId)) 
}
const isDone = (taskId) => {
  console.log(taskId)
  setData(
    data.map((task) => {
      if (task.taskId === taskId) {
        task.isDone = !task.isDone;
      }
      return task;
    })
  );
}



  return (
    <div className="App">
      <div className="container">
        <Header onNewTask= {(newTask)=>addTask(newTask)} taskId={lastTaskId}/>
        <Tasks dataProp={data} delTaskProp={(taskId)=>delTask(taskId)} isDoneProp={isDone}/>
      </div>
    </div>
  );
}

export default App;
