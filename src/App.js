import { useEffect, useState } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { db } from './utils/firebase';
import { collection, onSnapshot, setDoc, doc, query, orderBy } from "firebase/firestore";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const collRef = collection(db, 'todos');
    const q = query(collRef, orderBy('createdAt'));
    onSnapshot(q, (snapshop) => {
      setTodos(snapshop.docs.map((doc) => ({...doc.data(), id: doc.id})));
    });
  }, []);

  const handleCreate = (title) => {
    setDoc(doc(collection(db, 'todos')), {
      title,
      completed: false,
      createdAt : Date.now()
    });
  };

  return (
    <div className="app">
      <div className="app__header">
        What's up today ?
      </div>
      <TodoForm onCreate={handleCreate} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
