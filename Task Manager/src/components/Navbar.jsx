import React from 'react'
import { useTasks } from '../context/TaskContext';


function Navbar(){

    const { setFilter, setSearchQuery , searchQuery} = useTasks();
  return (
    <div>
        <button onClick={()=>setFilter("all")}>All</button>
        <button onClick={()=>setFilter("completed")}>Completed</button>
        <button onClick={()=>setFilter("pending")}>Pending</button>
        <input 
          type="text" 
          placeholder="Search tasks..." 
          value={searchQuery  }
          onChange={(e) => setSearchQuery(e.target.value)} 
  
        />
        <button onClick={() => setSearchQuery("")}>Clear</button>
    </div>
  )
}

export default React.memo(Navbar);