export default function Table() {
  return (
    <div class="container text-center">
      <div class="row my-3">
        <div class="col-5">
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Todo Here"
              aria-label="Todo-name"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>

        <div class="col-4">
          <div class="input-group flex-nowrap">
            <input
              type="date"
              class="form-control"
              placeholder="Enter Todo Here"
              aria-label="Todo-name"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        <div class="col-3 ">
          <button type="button" class="btn btn-success container">
            Add
          </button>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-5">
          <div class="text-center flex-nowrap">
           <p>Buy Milk</p>
          </div>
        </div>

        <div class="col-4">
          <div class="text-center flex-nowrap">
            07/08/2024
          </div>
        </div>
        <div class="col-3 ">
          <button type="button" class="btn btn-danger container">
           Delete
          </button>
        </div>
      </div>


      <div class="row mt-3">
        <div class="col-5">
          <div class="text-center flex-nowrap">
           <p>Buy Milk</p>
          </div>
        </div>

        <div class="col-4">
          <div class="text-center flex-nowrap">
            07/08/2024
          </div>
        </div>
        <div class="col-3 ">
          <button type="button" class="btn btn-danger container">
           Delete
          </button>
        </div>
      </div>


      <div class="row mt-3">
        <div class="col-5">
          <div class="text-center flex-nowrap">
           <p>Buy Milk</p>
          </div>
        </div>

        <div class="col-4">
          <div class="text-center flex-nowrap">
            07/08/2024
          </div>
        </div>
        <div class="col-3 ">
          <button type="button" class="btn btn-danger container">
           Delete
          </button>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-5">
          <div class="text-center flex-nowrap">
           <p>Buy Milk</p>
          </div>
        </div>

        <div class="col-4">
          <div class="text-center flex-nowrap">
            07/08/2024
          </div>
        </div>
        <div class="col-3 ">
          <button type="button" class="btn btn-danger container">
           Delete
          </button>
        </div>
      </div>

    </div>
  );
}
