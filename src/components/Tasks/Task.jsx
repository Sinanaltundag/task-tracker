import {useState} from 'react'

const Task = (taskProps) => {

const [isDone, setIsDone] = useState(taskProps.taskProps.isDone)

    console.log(taskProps)

    const handleDelete = (e)=> {
      console.log(e)
      e.stopPropagation()
      taskProps.delTaskProp(taskProps.taskProps.taskId)
    }
const handleIsDone =()=>{
  setIsDone(!isDone)
  taskProps.taskProps.isDone=isDone
  taskProps.isDoneProp(taskProps.taskProps.taskId)
}

  return (
    <div className={`task ${isDone ? 'task-done':""}`} onClick={handleIsDone}>
    <div className="task-group">
        <h3 className={`task-title ${isDone ? 'done':""}`}>{taskProps.taskProps.taskTitle}</h3>
        <span onClick={handleDelete}>X</span>
    </div>
        
        <p className={`task-date ${isDone ? 'done':""}`}>{taskProps.taskProps.taskDate}</p>
        
    </div>
  )
}

export default Task