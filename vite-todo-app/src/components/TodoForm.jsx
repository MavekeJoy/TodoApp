// src/components/TodoForm.jsx
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      text: input,
      isComplete: false,
    };

    addTodo(newTodo);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="flex-grow px-3 py-2 border rounded-l focus:outline-none focus:ring"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
