import Header from "./Header"
import Table from "./Table"
import Card from "./Card";
import { useState } from "react";
import Clear from "./Clear";

export default function Todo() {
  if(!localStorage.getItem("data")){
      localStorage.setItem("data",JSON.stringify([]))
  }
  let Data= JSON.parse(localStorage.getItem("data"))

  console.log(Data);
  const [data,updateDate]=useState(Data)
  console.log(data)

  return (
    <>
      <Header/>
      <div className="container text-center">
      <Table data_pass={data} update={updateDate}/>
      {Array.isArray(data) && data.map((value,key)=> {
         return <Card key={key} key_={key} task_name={value.task_name} task_date={value.task_date} data_pass={data} update={updateDate}/>
      })}
      </div>
      <div className="container">
      <Clear  update={updateDate}/>
      </div>
    </>
  )
}


 

/*
<div className="container ">
      <Header/>
      <div className="container text-center">
      <Table data_pass={data} update={updateDate}/>
      {Array.isArray(data) && data.map((value,key)=> {
         return <Card key={key} key_={key} task_name={value.task_name} task_date={value.task_date} data_pass={data} update={updateDate}/>
      })}
      </div>
      <div className="container">
      <Clear  update={updateDate}/>
      </div>
    </div> */