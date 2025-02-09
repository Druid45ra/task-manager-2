import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";
import { getTasks } from "./services/api";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Task Manager</h1>
              <TaskForm setTasks={setTasks} />
              <TaskList tasks={tasks} setTasks={setTasks} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
