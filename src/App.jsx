import { useState } from 'react';

import Page from './Page';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    setTodo('');
    setTodos([...todos, todo]);
  };

  const handleRemoveTodo = (todoIndex) => {
    setTodos(todos.filter((_, index) => index !== todoIndex));
  };

  return (
    <Page
      todos={todos}
      todo={todo}
      onChangeTodo={handleChangeTodo}
      onClickAdd={handleAddTodo}
      onClickRemove={handleRemoveTodo}
    />
  );
}

export default App;
