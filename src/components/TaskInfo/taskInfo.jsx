import React from 'react'
import "./style.css"
function TaskInfo({numberColor,number,text}) {

      
  return (
    <div className='task_box'>
      <div className="task_box_taxt">{text}</div>
      <div className="task_box_nuber" style={{color:numberColor}}> {number}</div>
    </div>
  )
}

export default TaskInfo