import React from 'react';

const TodoItem = ({id, title, completed, onDelete, onComplete}) => {
  return (
    <div className={`todoItem ${completed ? 'todoItem--completed' : ''}`}>
      <span className="todoItem__dot"></span>
      <div className="todoItem__title" onClick={() => onComplete(id)}>
        {title}
      </div>
      <button className="todoItem__delete" onClick={() => onDelete(id)}></button>
    </div>
  );
};

export default TodoItem;
