import React, { useState, useEffect } from "react";
import Header from "./Header";
import Table from "./Table";
import Card from "./Card";
import Clear from "./Clear";

export default function Todo() {
  // Initialize data from localStorage or empty array
  const initialData = JSON.parse(localStorage.getItem("data")) || [];

  // State to hold data
  const [data, updateData] = useState(initialData);

  useEffect(() => {
    // Update localStorage whenever data changes
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <Header />
      <div className="container text-center">
        <Table data_pass={data} update={updateData} />

        {Array.isArray(data) &&
          data.map((value, key) => (
            <Card
              key={key}
              key_={key}
              task_name={value.task_name}
              task_date={value.task_date}
              data_pass={data}
              update={updateData}
            />
          ))}
      </div>
      <div className="container">
        <Clear update={updateData} />
      </div>
    </>
  );
}
