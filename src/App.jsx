import Header from "./Components/Header"
import Table from "./Components/Table"
import Card from "./Components/Card";

function App() {

  return (
    <div className="container ">
      <Header/>
      <div className="container text-center">
      <Table/>
      <Card task_name={"Buy Milk"} task_date={"07/08/2024"}/>
      <Card task_name={"Shopping"} task_date={"13/08/2024"}/>
      <Card task_name={"Porject"} task_date={"07/09/2024"}/>
      </div>
    </div>
  )
}

export default App
