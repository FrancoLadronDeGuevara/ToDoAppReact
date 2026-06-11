import { FaTasks } from "react-icons/fa";
import AddTask from "./components/AddTask";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold flex items-center justify-center gap-2 mt-5">
        <FaTasks className="text-green-600" />
        <span className="text-blue-950">Mi Lista de Tareas</span>
      </h1>

      <AddTask />
    </>
  );
}

export default App;
