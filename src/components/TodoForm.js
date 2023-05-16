import React, { useState } from 'react';

const TodoForm = ({onCreate}) => {
  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div className="todoForm">
        <form onSubmit={onSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    </div>
  )
};

export default TodoForm;
