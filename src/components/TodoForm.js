import React, { useState } from 'react';

const TodoForm = ({onCreate}) => {
  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (title) {
      onCreate(title);
      setTitle('');
    }
  };

  return (
    <div className="todoForm">
        <form onSubmit={onSubmit}>
            <input className="todoForm__input" type="text" placeholder="Add todo..." value={title} onChange={(e) => setTitle(e.target.value)} />
            <button className="todoForm__submit" type="submit"><i></i></button>
        </form>
    </div>
  )
};

export default TodoForm;
