import React, { useState, useEffect } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleToggleCompleted = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskIndex) => {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?');
    if (confirmed) {
      const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="App">
      <h1>To-Do List Application</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleCompleted={handleToggleCompleted}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;
