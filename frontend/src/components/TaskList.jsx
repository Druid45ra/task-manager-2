import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../services/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task._id !== id));
  };

  const toggleComplete = async (id, completed) => {
    await updateTask(id, { completed: !completed });
    setTasks(tasks.map(task => task._id === id ? { ...task, completed: !completed } : task));
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <button onClick={() => toggleComplete(task._id, task.completed)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
