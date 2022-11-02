import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const tasksState = useSelector((state) => state.tasks);

  console.log(tasksState);

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1>Tasks</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
