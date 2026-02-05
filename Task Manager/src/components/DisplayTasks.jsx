import React from 'react'
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';
import { useMemo } from 'react';  

function DisplayTasks(){
    const { tasks, dispatch } = useTasks(); 
    const {filter} = useTasks();
    const {searchQuery} = useTasks();

    const filteredTasks = tasks.filter(task => {
        const matchesFilter = filter === 'all' || (filter === 'completed' && task.completed) || (filter === 'pending' && !task.completed);
        const matchesSearch = task.text.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
  });

  return (
    <div>
        {filteredTasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          dispatch={dispatch}
        />
      ))}
    </div>
  )
}

export default DisplayTasks