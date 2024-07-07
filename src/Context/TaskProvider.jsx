import { useReducer } from "react";
import TaskContext from "./TaskContext";
import dataReducer from "./Reducer";


export default function TaskProvider({ children }) {

  
  const [redData, redDispatch] = useReducer(
    dataReducer,
    JSON.parse(localStorage.getItem("data")) || []
  );

  function addTask(newTask) {
    const newTaskAction = {
      type: "ADD_TASK",
      payload: { ...newTask },
    };
    redDispatch(newTaskAction);
  }

  function deleteTask(key_) {
    const newTaskAction = {
      type: "DEL_TASK",
      payload: key_,
    };
    redDispatch(newTaskAction);
  }

  function clearTask() {
    const newTaskAction = {
      type: "CLEAR_TASK",
      payload: [],
    };
    redDispatch(newTaskAction);
  }

  return (
    <TaskContext.Provider value={{ data: redData, deleteTask, addTask, clearTask }}>
      {children}
    </TaskContext.Provider>
  );
}
