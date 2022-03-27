import {useState} from 'react'
import AddTask from './AddTask';
import Button from './Button'

const Header = (props) => {

  // console.log(props)
    const [showAddBtn, setShowAddBtn] = useState(true);

const addBtnChanger =()=>{
    setShowAddBtn(!showAddBtn)
}
let btnName= showAddBtn?"Show Add Task Bar":"Close Add Task Bar"


  return (
    <div>
    <h1>Task Tracker</h1>
    <Button click={addBtnChanger} btnName={btnName}/>
   
    {!showAddBtn&&<AddTask onNewTask={props.onNewTask} taskId={props.taskId}/>}
    </div>
  )
}

export default Header