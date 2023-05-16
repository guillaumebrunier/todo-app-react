import React from 'react';

const TodoItem = ({id, title, completed, onDelete, onComplete}) => {
  return (
    <div className={`todoItem ${completed ? 'todoItem--completed' : ''}`}>
      <div>
        {title}
      </div>
      <div>
        <button onClick={() => onComplete(id)}>Complete</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
