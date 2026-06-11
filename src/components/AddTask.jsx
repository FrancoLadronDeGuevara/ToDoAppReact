import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

function AddTask() {
  const [taskList, setTaskList] = useState(() => {
    return JSON.parse(localStorage.getItem("taskList")) || [];
  });
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleTask = () => {
    if (task.trim() === "") {
      setError("La tarea no puede estar vacía");
      return;
    }

    const newTask = {
      id: Date.now(),
      description: task,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    localStorage.setItem("taskList", JSON.stringify([...taskList, newTask]));
    setTask("");
    setError("");
  };

  return (
    <div className="text-blue-950 shadow-2xl w-1/2 m-auto p-5 flex flex-col gap-4">
      <h3 className="text-xl font-bold flex items-center  gap-2">
        <CiCirclePlus />
        <span>Nueva Tarea</span>
      </h3>

      <div>
        <label htmlFor="task">Descripción de la tarea</label>
        <textarea
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="block w-full my-2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          placeholder="Descripción de la tarea"
          rows={4}
        ></textarea>
        {error && (
          <p className="bg-red-300 rounded-md p-2 text-sm text-red-600 text-center">
            {error}
          </p>
        )}
      </div>

      <button
        onClick={handleTask}
        className="bg-indigo-600 text-white py-2 rounded-md cursor-pointer hover:bg-indigo-700"
      >
        Agregar Tarea
      </button>

      <p className="text-sm text-gray-600 bg-blue-300 rounded-md p-6">
        Tip: Puedes marcar las tareas como completadas, editarlas o eliminarlas
        usando los botones en cada tarea.
      </p>
    </div>
  );
}

export default AddTask;
