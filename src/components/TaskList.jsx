import { useSelector } from "react-redux";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {/* List Tasks */}
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
