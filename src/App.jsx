import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const tasksState = useSelector((state) => state.tasks);

  console.log(tasksState);

  return (
    <div className="bg-gray-100 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
