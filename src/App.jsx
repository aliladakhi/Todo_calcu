import Calcu from "./Components/Calcu/Calcu";
import Todo  from "./Components/Todo/Todo";
import  TaskProvider  from "./Context/Provider";
function App() {
  return (
    <>
      <div className="container">
      <TaskProvider>
        <Todo/>
        </TaskProvider>
      </div>
      <div className="container">

        <Calcu />

      </div>
    </>
  );
}

export default App;
