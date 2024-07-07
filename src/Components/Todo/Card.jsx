import { useContext } from "react";
import { MdOutlineAutoDelete } from "react-icons/md";
import TaskContext from "../../Context/TaskContext";

export default function Card({ key_, task_name, task_date }) {
  let todoName = task_name;
  let todoDate = task_date;
  const { deleteTask } = useContext(TaskContext);

  function handleDelete() {
    deleteTask(key_);
  }

  return (
    <div className="row mt-3">
      <div className="col-5 d-flex ">
        <div className="text-center flex-nowrap">
          <p>{todoName}</p>
        </div>
      </div>

      <div className="col-4 d-flex">
        <div className="text-center flex-nowrap">{todoDate}</div>
      </div>

      <div className="col-3">
        <button
          onClick={handleDelete}
          type="button"
          className="btn btn-danger container"
        >
          <MdOutlineAutoDelete />
        </button>
      </div>
    </div>
  );
}
