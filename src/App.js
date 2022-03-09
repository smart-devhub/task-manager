import { useEffect, useState } from "react";
import Addtask from "./components/Addtask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {v4 as uuidv4} from 'uuid'
import Swal from "sweetalert2";

function App() {
  // All States
    const [tasks, setTasks] = useState([]); // Task State
    const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form
    const [loading,setloading]=useState(true)

    const addtask=(task)=>{
      const id=uuidv4()
      const newTask={id,...task}
      setTasks([...tasks,newTask])
      Swal.fire({
        icon: 'success',
        title: 'Yay...',
        text: 'You have successfully added a new task!'
      })
      localStorage.setItem('taskdata',JSON.stringify([...tasks,newTask]))
  
    }

    const onDelete=(id)=>{
      const deleteTask=tasks.filter(item=>item.id !==id)
      setTasks(deleteTask)
      Swal.fire({
        icon: 'success',
        title: 'Oops...',
        text: 'You have successfully deleted a task!'
      })
      localStorage.setItem("taskdata", JSON.stringify(deleteTask));

    }
   const  onEdit=(id)=>{
     const text=prompt("Task Name")
     const day=prompt("Day and Time")
     let mydata = JSON.parse(localStorage.getItem('taskdata'));
     const data=mydata.map(task=>{
       if(task.id===id){
         return{
           ...task,
           text:text,
           day:day,
           id:uuidv4()
         }
       }
       return task;
     })
     Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully edited an existing task!'
  })
  localStorage.setItem("taskdata", JSON.stringify(data));
    window.location.reload();
   }
   useEffect(()=>{
           setTimeout(() => {
           setloading(false)
           }, 3000);
   },[])

   const getdata=JSON.parse(localStorage.getItem('taskdata'))
   useEffect(()=>{
         if(getdata==null){
           setTasks([])
         }else{
           setTasks(getdata)
         }
   },[])

    return (
        <>

        {
          loading ?
          <div className="spinnerContainer">
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
          </div>
          :
        
          <div className="container">
            {/* App Header */}
            <Header showform={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />
            {/* Revealing the Add Task Form */}
            {showAddTask && <Addtask addtask={addtask} />}
            <h3>Number of Tasks: {tasks.length}</h3>
            
            
            {/* Displaying Tasks */}
            {
              tasks.length > 0 ?
                (<Tasks tasks={tasks} onDelete={onDelete} onEdit={onEdit} />) :
                ('No Task Found!')
            }
          </div>
         
}
        </>
    )
}
export default App;