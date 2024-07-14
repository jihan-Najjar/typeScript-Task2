import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../type';

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggleComplete={onToggleComplete} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
