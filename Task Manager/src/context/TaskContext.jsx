import React from "react";
import { createContext, useReducer, useContext, useState } from "react";

const initialState = {
  tasks : [] 
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { 
        ...state, 
        tasks: [
          ...state.tasks, 
          { id: Date.now(), text: action.payload, completed: false }
        ] 
      };
    case 'DELETE_TASK':
      return { 
        ...state, 
        tasks: state.tasks.filter(task => task.id !== action.payload) 
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, text: action.payload.text } : task
        ),
      };
    default:
      return state;
  }
};


const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [filter, setFilter] = useState('all');

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, dispatch, filter, setFilter }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};
