import React, { useState } from 'react'
import DisplayTasks from './DisplayTasks'
import { useTasks } from '../context/TaskContext'
import Navbar from './Navbar';

function TaskDash() {

    const [text, setText] = useState("")
    const { dispatch } = useTasks();

    const handleAdd = () => {
        if (!text) return;
        dispatch({ type: 'ADD_TASK', payload: text });
        setText(''); 
    };

    
    
    return (
        <div>
            <Navbar/>
            <input type="text" value = {text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleAdd}>Add Task</button>
            <DisplayTasks />
        </div>
    )
}

export default TaskDash