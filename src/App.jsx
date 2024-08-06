import ListaTarea from "./components/ListaTarea";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TaskForm />
      <ListaTarea />
      </div>
    </div>
  );
}

export default App;
