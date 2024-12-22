import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() && taskDescription.trim()) {
      onAddTask({ name: taskName, description: taskDescription, completed: false });
      setTaskName('');
      setTaskDescription('');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        placeholder="Description de la tâche"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit">Ajouter la tâche</button>
    </form>
  );
};

export default TaskForm;
