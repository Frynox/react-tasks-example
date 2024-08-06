import { createContext, useState, useEffect } from "react";
import {tareas} from '../data/tareas' 

export const TasksContext = createContext();

export function TasksContextProvider(props) {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(tareas);
  }, []);

  function createTask(newTask) {
    setTask([
      ...task,
      {
        title: newTask.title,
        id: task.length,
        description: newTask.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(task.filter((task) => task.id !== taskId));
  }
  return (
    <TasksContext.Provider
      value={{ task: task, createTask: createTask, deleteTask: deleteTask }}
    >
      {props.children}
    </TasksContext.Provider>
  );
}
