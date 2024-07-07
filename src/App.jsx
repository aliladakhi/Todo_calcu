import Calcu from "./Components/Calcu/Calcu";
import Todo  from "./Components/Todo/Todo";
function App() {
  return (
    <>
      <div className="container">
        <Todo/>

      </div>
      <div className="container">
        <Calcu />
      </div>
    </>
  );
}

export default App;
