import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/taskSlice";
import Header from "./Header";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <Header />

      {/* List Tasks */}
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="flex space-x-10 items-center">
            <div>
              <h3 className="text-xl font-bold">{task.title}</h3>
              <p>{task.description}</p>
            </div>

            <div className="space-x-2">
              <Link
                to={`/edit-task/${task.id}`}
                className="bg-yellow-500 p-1 rounded-md text-white hover:bg-yellow-600"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 p-1 rounded-md text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
