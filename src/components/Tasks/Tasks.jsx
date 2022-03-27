import React from 'react'
import Task from './Task'

const Tasks = (props) => {
    console.log(props.isDoneProp)
    console.log(props.delTaskProp)
  return (
    <div>
    {props.dataProp?.map(task => <Task taskProps={task} key={task.taskId}  {...props}/>)}
        
    </div>
  )
}

export default Tasks
// delTaskProp={props.delTaskProp} isDoneProp={props.isDoneProp}