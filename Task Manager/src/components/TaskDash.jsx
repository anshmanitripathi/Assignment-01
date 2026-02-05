import React, { useState } from 'react'
import DisplayTasks from './DisplayTasks'
import { useTasks } from '../context/TaskContext'
import Navbar from './Navbar';
import { useRef } from 'react';

function TaskDash() {

    const [text, setText] = useState("")
    const { dispatch } = useTasks();

    const handleAdd = () => {
        if (!text) return;
        dispatch({ type: 'ADD_TASK', payload: text });
        setText(''); 
    };

    const inputEl = useRef(null);

    function focus(){
        inputEl.current.focus();
    }

    const handler = ()=>{
        
    }

    
    
    return (
        <div>
            <Navbar/>
            <input type="text" ref={inputEl} value = {text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => { handleAdd(); focus(); }}>Add Task</button>
            <DisplayTasks />
        </div>
    )
}

export default TaskDash