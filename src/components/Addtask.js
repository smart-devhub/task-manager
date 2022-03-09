import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Addtask = ({addtask}) => {
  const [text,setText]=useState('')
  const [day,setDay]=useState('')

  const onSubmit=(e)=>{
    e.preventDefault()
    if(!text && !day){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill in your task and date or close the form!'
      })
    }
    else if(!text && day){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill in your task '
      })


    }
    else if(text && !day){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please add Timd and Day '
      })

    }
    else{
      const task={
        text,
        day
      }
      addtask(task)
    }
    setText('')
    setDay('')

  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
             <label>Task</label>
             <input type='text' placeholder='Add Task...' 
             value={text} onChange={(e)=>setText(e.target.value)}
             />
      </div>
      <div className='form-control'>
             <label>Day & Time</label>
             <input type='text' placeholder='Add day and time...' 
             value={day} onChange={(e)=>setDay(e.target.value)}
             />
      </div>
      <input type='submit' className='btn btn-block' value={'Save Task'} />
    </form>
  )
}

export default Addtask