import {useState} from 'react'

const Task = ({taskProps,isDoneProp,delTaskProp}) => {

const [isDone, setIsDone] = useState(taskProps.isDone)

    const handleDelete = (e)=> {
      e.stopPropagation()
      delTaskProp(taskProps.taskId)
    }
const handleIsDone =()=>{
  setIsDone(!isDone)
  isDoneProp(taskProps.taskId)
}

  return (<div>
    <div className={`task ${isDone ? 'task-done':""}`} onClick={handleIsDone}>

    <div className="task-group">
        <h3 className={`task-title ${isDone ? 'done':""}`}>{taskProps.taskTitle}</h3>
        <span onClick={handleDelete}>X</span>
    </div>
        
        <p className={`task-date ${isDone ? 'done':""}`}>{taskProps.taskDate}</p>
        
    </div></div>
  )
}

export default Task