import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({ ...task, id: uuid() }));
    }
    navigate("/");
  };

  useEffect(() => {
    console.log(params);

    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-800 flex flex-col max-w-md w-full p-4 rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4">
        {!params.id ? "Create" : "Edit"} Task
      </h2>

      <label
        htmlFor="title"
        className="block text-xs text-gray-200 font-bold mb-1"
      >
        Task:{" "}
      </label>
      <input
        className="w-full p-2 rounded-md bg-zinc-600 mb-4 outline-none"
        type="text"
        name="title"
        placeholder="New Task ..."
        onChange={handleChange}
        value={task.title}
      />

      <label
        htmlFor="description"
        className="block text-xs text-gray-200 font-bold mb-1"
      >
        Description:{" "}
      </label>
      <textarea
        className="w-full p-2 rounded-md bg-zinc-600 mb-4 outline-none"
        name="description"
        placeholder="Description ..."
        onChange={handleChange}
        value={task.description}
      ></textarea>

      <button className="bg-indigo-600 px-2 py-1 rounded-md hover:bg-indigo-700">
        Save
      </button>
    </form>
  );
}

export default TaskForm;
