
import React from 'react';
import { Todo } from '../type';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDeleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
