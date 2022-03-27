// import {useState} from 'react'

const Button = (props) => {
    // const [showAddBtn, setShowAddBtn] = useState(true);

  return (
    <div>
        <button onClick={props.click} >{props.btnName}</button>
    </div>
  )
}

export default Button


/* {showAddBtn?(
    <button onClick={()=>setShowAddBtn(!showAddBtn)}>Show Add Task Bar</button>
):(
    <button onClick={()=>setShowAddBtn(!showAddBtn)}>Close Add Task Bar</button>

)
} */