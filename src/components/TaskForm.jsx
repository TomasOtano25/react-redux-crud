import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ ...task, id: uuid() }));
  };

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
      />

      <textarea
        className="outline-none p-2 rounded-md"
        name="description"
        placeholder="Description"
        onChange={handleChange}
      ></textarea>

      <button className="bg-blue-400 p-2 rounded-md hover:bg-blue-500 cursor-pointer font-bold text-white">
        Save
      </button>
    </form>
  );
}

export default TaskForm;
