export default function Clear({update}){

  function handleOnClick(){
    let newData=[]
    update(newData)
    localStorage.clear()
  }

  return(
    <>
    <button type="button" onClick={handleOnClick} className=" cls-btn">
      Reset
    </button>
    </>
  );
}
//className="btn btn-danger container"