// src/App.jsx
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (todo) => {
    if (todo.text.trim() === '') {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  // Function to remove a todo by id
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // Function to toggle completion status
  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold text-center mb-4">ToDo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
}

export default App;
