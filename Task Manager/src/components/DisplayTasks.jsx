import React from 'react'
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

function DisplayTasks(){
    const { tasks, dispatch } = useTasks(); 
    const {filter} = useTasks();

    const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;

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