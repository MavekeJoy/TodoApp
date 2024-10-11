// src/components/TodoItem.jsx
import React from 'react';
import { FaTrash } from 'react-icons/fa';

function TodoItem({ todo, removeTodo, toggleComplete }) {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <div
        className={`flex items-center cursor-pointer ${todo.isComplete ? 'line-through text-gray-500' : ''
          }`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </div>
      <button
        onClick={() => removeTodo(todo.id)}
        className="text-red-500 hover:text-red-700 focus:outline-none"
      >
        <FaTrash />
      </button>
    </li>
  );
}

export default TodoItem;
