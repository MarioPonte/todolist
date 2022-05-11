import React, { useState } from "react";
import Tasks from "./components/Tasks";
import "./App.css";

const App = () => {
  //const message = "Hello friend!";

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Comprar tomates',
      completed: false,
    },
    {
      id: '2',
      title: 'Comprar batatas camponesas',
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container">
        < Tasks tasks={tasks}/>
      </div>
    </>
  );
}

export default App;