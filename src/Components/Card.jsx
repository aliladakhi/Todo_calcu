export default function Card({task_name,task_date}){

  let todoName=task_name
  let todoDate=task_date

  return (
    <div className="row mt-3">
    <div className="col-5">
      <div className="text-center flex-nowrap">
       <p>{todoName}</p>
      </div>
    </div>

    <div className="col-4">
      <div className="text-center flex-nowrap">
        {todoDate}
      </div>
    </div>
    <div className="col-3 ">
      <button type="button" className="btn btn-danger container">
       Delete
      </button>
    </div>
  </div>

  );
}