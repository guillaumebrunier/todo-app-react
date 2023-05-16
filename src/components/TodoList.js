import React from 'react';
import TodoItem from './TodoItem';
import { db } from './../utils/firebase';
import { setDoc, doc, deleteDoc, getDoc } from "firebase/firestore";

const TodoList = ({todos, setTodos}) => {
  const handleDelete = (id) => {
    deleteDoc(doc(db, 'todos', id));
  };

  const handleComplete = async (id) => {
    const docSnap = await getDoc(doc(db, 'todos', id));
    if (docSnap.exists()) {
      const data = docSnap.data();
      setDoc(doc(db, 'todos', id), {
        ...data,
        completed: !data.completed
      });
    }
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
