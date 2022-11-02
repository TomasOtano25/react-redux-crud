import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <header className="text-center my-4">
      <h1 className="text-xl font-bold my-2">Tasks {tasks.length}</h1>

      <Link
        to="/create-task"
        className="p-2 bg-blue-400 rounded-md text-white hover:bg-blue-500"
      >
        Create Task
      </Link>
    </header>
  );
}

export default Header;
