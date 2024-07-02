import { useState } from "react";


export default function Table({data_pass,update}) {
  const [task,setTask]=useState("")
  const [date,setDate]=useState("")

  function handleadd() {
    const newData = [...data_pass,...[{task_name:task,task_date:date}]];
    localStorage.setItem("data",JSON.stringify([...newData]))
    update(newData);
    setTask("")
    setDate("")
  }

  function taskEntry(e){
    setTask(e.target.value)
  }
  function dateEntry(e){
    setDate(e.target.value)
  }
  return (
      <div className="row my-3">
        <div className="col-5">
          <div className="input-group flex-nowrap">
            <input
            value={task}
            onChange={taskEntry}
              type="text"
              className="form-control"
              placeholder="Enter Todo Here"
              aria-label="Todo-name"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>

        <div className="col-4">
          <div className="input-group flex-nowrap">
            <input
            value={date}
            onChange={dateEntry}
              type="datetime-local"
              className="form-control"
              placeholder="Enter Todo Here"
              aria-label="Todo-name"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        <div className="col-3 ">
          <button type="button" onClick={handleadd} className="btn btn-success container " disabled={task.length==0 || date.length==0}>
            Add
          </button>
        </div>
      </div>

  );
}
