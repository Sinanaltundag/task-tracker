import {useState} from 'react'

const AddTask = (props) => {

const [taskInput, setTaskInput] = useState("")
const [dateInput, setDateInput] = useState("")
const today = new Date();
console.log(today.valueOf())
console.log(Date.parse(dateInput))
Date.parse(dateInput)<today.valueOf()?console.log("first"):console.log("second")
// console.log(taskInput,dateInput)
// console.log(props.taskId)
const newTask = taskInput&&dateInput&&{taskId:(props.taskId+1), taskTitle:taskInput,taskDate:dateInput, isDone:false}
// console.log(newTask)
    const handleFormSubmit=(e)=>{
e.preventDefault();
Date.parse(dateInput)>today.valueOf()?newTask&&props.onNewTask(newTask):alert("Invalid Date: Please select date after now")
setTaskInput("")
setDateInput("")

    }

    // console.log(props)
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