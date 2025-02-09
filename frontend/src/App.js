import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/tasks">
          <TaskForm />
          <TaskList />
        </Route>
        <Route path="/">
          <h1>Welcome to Task Manager</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
