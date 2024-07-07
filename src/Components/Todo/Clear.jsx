import { useContext } from "react";
import style from "./Clear.module.css";
import TaskContext from "../../Context/TaskContext";

export default function Clear() {
  const { clearTask } = useContext(TaskContext);
  function handleOnClick() {
    clearTask();
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOnClick}
        className={`${style["cls-btn"]}`}
      >
        Reset
      </button>
    </>
  );
}
//className="btn btn-danger container"
