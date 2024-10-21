import React,{useState,useEffect} from "react";
import axios from 'axios'


const TaskList=()=>{
    const [tasks,setTasks]=useState([]);
    const [editing,setEditing]=useState(false);
    const [currentTask, setCurrentTask]= useState({id:null, title:'',description:''});

    useEffect(()=>{
        axios.get('https://aswanth74.pythonanywhere.com/api/tasks/')
        .then(response => setTasks(response.data))
        .catch(error => console.log(error));
    },[]);

    const editTask=(task)=>{
        setEditing(true);
        setCurrentTask(task);
    };
    const updateTask=(id,updatedTask)=>{
        setEditing(false);
        axios.put(`http://localhost:8000/api/tasks/${id}/`,updatedTask)
        .then(response=>{
            setTasks(tasks.map(task=>(task.id === id? response.data:task)));
        })
        .catch(error=>console.log(error));
    }
    return(
        <div className="container mt-3">
            <h2>Task List</h2>
            <table className="table table-bordered table-hover">
                {tasks.map(task => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td><button className="btn btn-warning px-3" onClick={() =>editTask(task)}>Edit</button></td>
                        <td><button className="btn btn-danger" onClick={() =>deleteTask(task.id)}>Delete</button></td>
                    </tr>
                ))}
            </table>
            {editing ?(
                <EditTaskForm
                 currentTask={currentTask}
                 updateTask={updateTask}
                />
            ):null}
        </div>
    );
};
export default TaskList
    