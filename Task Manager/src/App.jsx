import './App.css'
import { TaskProvider } from './context/TaskContext';
import TaskDash from './components/TaskDash';

function App() {

  return (
    <>
      <h1>Task Manager</h1>
      <TaskProvider>
        <TaskDash/>
      </TaskProvider>
    </>
  )
}

export default App