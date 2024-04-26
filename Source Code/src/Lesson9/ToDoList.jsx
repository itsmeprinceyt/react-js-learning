import React, {useState} from 'react';
import './ToDoList.css'
function TodoList(){
    const [tasks, setTasks] = useState([]);
    const [newtasks, setNewTasks] = useState("");

    function InputChange(event)
    {
        setNewTasks(event.target.value);
    }
    function AddNewTask(){
        if(newtasks.trim() !== "")
        {
            setTasks(T => [...tasks, newtasks])
            setNewTasks("")
        }
    }

    function DeleteTask(index){
        const updatedTasks = tasks.filter((_,i)=> i !== index);
        setTasks(updatedTasks);
    }

    function MoveTaskUp(index){
        if(index > 0)
        {
                const updatedTasks = [...tasks]; // we are copying the current task to update
                [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
                setTasks(updatedTasks);
        }
    }

    function MoveTaskDown(index){
        if(index < tasks.length-1)
        {
                const updatedTasks = [...tasks]; // we are copying the current task to update
                [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
                setTasks(updatedTasks);
        }
    }
    return(
        <div className="ToDoContainer">
            <div className="ToDoMain">
                <h1 className="ToDo-header">To-Do List in React</h1>
                <div>
                    <input 
                        className="InputData"
                        value={newtasks}
                        onChange={InputChange}
                        placeholder="Enter your task..."
                    /><button className="InputData-button"onClick={AddNewTask}>Add</button>
                </div>
                <div className="ToDoTasks">
                    <ul type="none">
                        {tasks.map((element,index)=> 
                        <li key={index}>
                            <span className="Text">{element}</span>
                            <button className="ToDoDelete" onClick={()=> DeleteTask(index)}>Delete</button>
                            <button className="ToDoUp" onClick={()=>MoveTaskUp(index)}>👆</button>
                            <button className="ToDoDown" onClick={()=> MoveTaskDown(index)}>👇</button>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TodoList;