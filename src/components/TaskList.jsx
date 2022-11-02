import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="flex flex-col items-center">
      {/* List Tasks */}
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="flex space-x-10 items-center">
            <div>
              <h3 className="text-xl font-bold">{task.title}</h3>
              <p>{task.description}</p>
            </div>

            <button
              onClick={() => handleDelete(task.id)}
              className="bg-red-500 p-1 rounded-md text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
