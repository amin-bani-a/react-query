import { useDeleteTask } from "./reactQueryCustomHooks";
import { useEditTask } from "./reactQueryCustomHooks";

const SingleItem = ({ item }) => {
  const { editTask } = useEditTask();
  const { deleteTask, deleteTaskLoading } = useDeleteTask();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        id={item.id}
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
      />
      <label htmlFor={item.id}>
        <p
          style={{
            textTransform: "capitalize",
            textDecoration: item.isDone && "line-through",
          }}
        >
          {item.title}
        </p>
      </label>

      <button
        className="btn remove-btn"
        type="button"
        disabled={deleteTaskLoading}
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
