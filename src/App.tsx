
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import { Todo } from './type';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault()
    if (newTodo.trim()) {
      setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='app'>
      <h1>ToDo App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'  >
          <input value={newTodo} id='todo' onChange={(e) => setNewTodo(e.target.value)} />

        </label>
        <button type='submit' >Add ToDo</button>
      </form>

      <TodoList todos={todos} onToggleComplete={handleToggleComplete} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;