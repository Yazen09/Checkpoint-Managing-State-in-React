import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleCompleted, onDelete, onEdit }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onToggleCompleted={() => onToggleCompleted(index)}
          onDelete={() => onDelete(index)}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TaskList;
