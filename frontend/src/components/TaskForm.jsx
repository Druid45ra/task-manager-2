import React, { useState } from 'react';
import { createTask } from '../services/api';

const TaskForm = ({ onTaskCreated }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = await createTask({ name: taskName });
    onTaskCreated(newTask);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="New Task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
