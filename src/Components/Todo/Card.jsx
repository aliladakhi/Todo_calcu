import { MdOutlineAutoDelete } from "react-icons/md";

export default function Card({ key_, task_name, task_date, data_pass, update }) {
  let todoName = task_name;
  let todoDate = task_date;

  function handleDelete() {
    // Create a copy of data_pass to avoid mutating state directly
    const newData = [...data_pass];
    // Remove the item at index key_
    newData.splice(key_, 1);
    localStorage.setItem("data",JSON.stringify(newData))
    console.log(newData); // Check the updated array in console
    // Update state with the new array
    update(newData);
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
        <button onClick={handleDelete} type="button" className="btn btn-danger container">
        <MdOutlineAutoDelete />
        </button>
        
      </div>
    </div>
  );
}
