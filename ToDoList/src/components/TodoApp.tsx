import { v4 as uuid } from "uuid";

import{ useEffect, useState } from "react";
import type { Todo } from "../moudles/Todo";
import TodoItem from "./TodoItem/TodoItem";

// Todo App Component
export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = { id: uuid(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");

  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-md rounded bg-white">
      <h1 className="text-2xl mb-4 font-bold">Matomo Todo List</h1>
      <div className="flex mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="max-w-md mx-auto mt-10 p-4 shadow-md rounded bg-white"
          placeholder="Add a new todo"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};
