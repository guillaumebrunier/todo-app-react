import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, setTodos}) => {
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id 
        ? {...todo, completed: !todo.completed}
        : todo
    }));
  };

  return (
    <div className="todoList">
      {todos.map((todo) => 
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
};

export default TodoList;
