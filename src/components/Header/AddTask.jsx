import {useState} from 'react'

const AddTask = (props) => {

const [taskInput, setTaskInput] = useState("")
const [dateInput, setDateInput] = useState("")
const today = new Date();
const newTask = taskInput&&dateInput&&{taskId:(props.taskId+1), taskTitle:taskInput,taskDate:dateInput, isDone:false}
    const handleFormSubmit=(e)=>{
e.preventDefault();
Date.parse(dateInput)>today.valueOf()?newTask&&props.onNewTask(newTask):alert("Invalid Date: Please select date after now")
setTaskInput("")
setDateInput("")

    }

  return (
    <div>
        <form onSubmit={handleFormSubmit}>
<label htmlFor="task">Task</label><br />
<input type="text" id="task" name="task" placeholder="Enter a task" onChange={(e)=>{setTaskInput(e.target.value)}} value={taskInput}/><br />
<label htmlFor="date">Day & Time</label><br />
<input type="datetime-local" id="date" name="date" onChange={(e)=>{setDateInput(e.target.value)}} value={dateInput}/><br />
<button >Save Task</button>
        </form>
    </div>
  )
}

export default AddTask