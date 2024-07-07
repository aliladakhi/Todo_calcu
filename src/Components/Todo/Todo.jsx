import React, { useContext } from "react";
import Header from "./Header";
import Table from "./Table";
import Card from "./Card";
import Clear from "./Clear";
import TaskContext from "../../Context/TaskContext";

export default function Todo() {

  const { data} = useContext(TaskContext);

  return (
    <>
      <Header />
      <div className="container text-center">
        <Table/>

        {Array.isArray(data) &&
          data.map((value, key) => (
            <Card
              key={key}
              key_={key}
              task_name={value.task_name}
              task_date={value.task_date}
            />
          ))}
      </div>
      <div className="container">
        <Clear/>
      </div>
    </>
  );
}
