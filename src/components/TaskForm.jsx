import React, { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TasksContext);

  function HandleSubmit(e) {
    e.preventDefault();
    createTask({ title, description });

    setTitle("");
    setDescription("");
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={HandleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-gray-300 mb-2">Crea Tu Tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
      />
      <input
        placeholder="Escribe tu descripcion"
        onChange={function (e) {
          setDescription(e.target.value);
        }}
        className="bg-slate-300 p-3 w-full mb-2"
        value={description}
      />
      <button className="bg-indigo-500 px-3 py-1">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
