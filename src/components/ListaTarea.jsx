import TaskCard from './taskCard'
import { useContext } from 'react';
import {TasksContext} from '../context/TasksContext'

function ListaTarea() {
  const { task} =  useContext(TasksContext);
 
  if (task.length === 0) {
    return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas</h1>
  }
  return (
    <div className='grid grid-cols-4 gap-2'>
      {task.map((tasks) => (
        <TaskCard key={tasks.id} tasks={tasks}/>
      ))}
    </div>
  );
}

export default ListaTarea;
