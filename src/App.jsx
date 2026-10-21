import { useState } from "react";

import TaskList from "./components/TaskList.jsx";

import TaskForm from "./components/TaskForm.jsx";

import "./App.css";

 

// Session 13: the books are typed in here, in the browser.

// Session 14 replaces this array with GET /api/books.

const STARTING_TASK = [

  { id: 1, title: "Reading Books", completed: true },

  { id: 2, title: "Eating", completed: false },

  { id: 3, title: "Walking the dog", completed: false },

  { id: 4, title: "Singing", completed: false },

];
function App() {

  const [tasks, setTasks] = useState(STARTING_TASK);

 

  function addTask(title) {

    const newTask = {

      id: Date.now(),

      title: title,

      completed: false,

    };

    setTasks ([...tasks, newTask]);

  }
  return (

    <main className="TaskManager">

      <h1>Task List</h1>

      <p className="count">

        {tasks.length} tasks in the list

      </p>

      <TaskForm onAdd={addTask} />

      <TaskList tasks={tasks} />

    </main>

  );

}

 

export default App;