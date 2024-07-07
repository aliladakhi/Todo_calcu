import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  // Initialize localStorage if data doesn't exist
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify([]));
  }

  // Retrieve initial data from localStorage
  let initialData = JSON.parse(localStorage.getItem("data"));

  // State to hold data and function to update data
  const [data, setData] = useState(initialData);

  // Function to update data and persist in localStorage
  const updateData = newData => {
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return (
    <TaskContext.Provider value={{ data, updateData }}>
      {children}
    </TaskContext.Provider>
  );
}
