import {useState } from "react"
import TaskContext from "./TaskContext";

export default function TaskProvider({ children }) {

  // State to hold data
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || []);
  console.log(data)
// Function to update data and persist in localStorage


function deleteTask(key_){
  setData((currData)=>{
    const newData = [...data];
    newData.splice(key_, 1);
    localStorage.setItem("data",JSON.stringify(newData))     
    return newData
  })

}

function addTask(newTask){
  setData((currData)=>{
    let newData=[...data,newTask]
    localStorage.setItem("data", JSON.stringify(newData));
    return newData
  });
}

function clearTask(){
  setData((currData)=>{
    let newData=[]
    localStorage.setItem("data", JSON.stringify(newData));
    return newData
  })
}

return (
  <TaskContext.Provider value={{ data , deleteTask,addTask,clearTask}}>
    {children}
  </TaskContext.Provider>
);
}
