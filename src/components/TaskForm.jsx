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
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-lg mx-auto space-y-2"
    >
      <input
        className="outline-none p-2 rounded-md"
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={task.title}
      />

      <textarea
        className="outline-none p-2 rounded-md"
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={task.description}
      ></textarea>

      <button className="bg-blue-400 p-2 rounded-md hover:bg-blue-500 cursor-pointer font-bold text-white">
        Save
      </button>
    </form>
  );
}

export default TaskForm;
