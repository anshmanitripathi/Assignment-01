import React from 'react'
import { useTasks } from '../context/TaskContext';

function Navbar(){

    const { setFilter } = useTasks();

  return (
    <div>
        <button onClick={()=>setFilter("all")}>All</button>
        <button onClick={()=>setFilter("completed")}>Completed</button>
        <button onClick={()=>setFilter("pending")}>Pending</button>
    </div>
  )
}

export default React.memo(Navbar);