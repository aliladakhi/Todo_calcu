

export default function Table() {
  return (
      <div className="row my-3">
        <div className="col-5">
          <div className="input-group flex-nowrap">
            <input
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
              type="date"
              className="form-control"
              placeholder="Enter Todo Here"
              aria-label="Todo-name"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        <div className="col-3 ">
          <button type="button" className="btn btn-success container">
            Add
          </button>
        </div>
      </div>

  );
}
