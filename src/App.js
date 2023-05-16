import { useState } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleCreate = (title) => {
    const todo = {
      id: uuidv4(),
      title: title
    };
  
    setTodos([...todos, todo]);
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
