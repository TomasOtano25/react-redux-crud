import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <header className="flex justify-between items-center p-4 ">
      <h1 className="text-xl font-bold my-2">Tasks {tasks.length}</h1>

      <Link
        to="/create-task"
        className="bg-indigo-600 px-2 py-1 rounded-md text-sm hover:bg-indigo-700"
      >
        Create Task
      </Link>
    </header>
  );
}

export default Header;
