import React, { useContext, useRef } from "react";
import { MdAddBox } from "react-icons/md";
import TaskContext from "../../Context/TaskContext";

export default function Table() {

  const {addTask}=useContext(TaskContext)

  const taskNameRef = useRef(null);
  const taskDateRef = useRef(null);

  const handleAdd = (event) => {
    event.preventDefault();
    const taskName = taskNameRef.current.value;
    const taskDate = taskDateRef.current.value;
    if (taskName.length === 0 || taskDate.length === 0) {
      return;
    }
    addTask({ task_name: taskName, task_date: taskDate }) 
    taskNameRef.current.value = "";
    taskDateRef.current.value = "";
  };

  function handleEnter(event) {
    const taskName = taskNameRef.current.value;
    const taskDate = taskDateRef.current.value;

    if (
      event.key === "Enter" &&
      taskName.length > 0 &&
      taskDate.length > 0
    ) {
      handleAdd(event);
    }
  }

  return (
    <form className="row my-3" onSubmit={handleAdd}>
      <div className="col-5">
        <div className="input-group flex-nowrap">
          <input
            ref={taskNameRef}
            type="text"
            className="form-control"
            placeholder="Enter Todo Here"
            aria-label="Todo-name"
            aria-describedby="addon-wrapping"
            onKeyDown={handleEnter}
          />
        </div>
      </div>

      <div className="col-4">
        <div className="input-group flex-nowrap">
          <input
            ref={taskDateRef}
            type="datetime-local"
            className="form-control"
            placeholder="Enter Date Here"
            aria-label="Todo-date"
            aria-describedby="addon-wrapping"
            onKeyDown={handleEnter}
          />
        </div>
      </div>
      <div className="col-3">
        <button
          className="btn btn-success container">
          <MdAddBox />
        </button>
      </div>
    </form>
  );
}
