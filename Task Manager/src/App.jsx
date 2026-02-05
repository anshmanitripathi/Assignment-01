import './App.css'
import { TaskProvider } from './context/TaskContext';
import TaskDash from './components/TaskDash';

function App() {

  return (
    <>
      <TaskProvider>
        <TaskDash/>
      </TaskProvider>
    </>
  )
}

export default App