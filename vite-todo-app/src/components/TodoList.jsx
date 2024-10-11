// src/components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No tasks added yet!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
