import React, { useState } from 'react';

const TaskItem = ({ task, onToggleCompleted, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(task.id, editedName, editedDescription);
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button type="submit">Sauvegarder</button>
        </form>
      ) : (
        <>
          <strong>{task.name}</strong>: {task.description}
          <button onClick={onToggleCompleted}>
            {task.completed ? 'Marquer comme non terminée' : 'Marquer comme terminée'}
          </button>
          <button onClick={onDelete}>Supprimer</button>
          <button onClick={() => setIsEditing(true)}>Modifier</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
