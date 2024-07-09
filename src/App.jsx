import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./scss/styles.scss";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, isEditing: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, title) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h1>My To-Do List</h1>
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask(e.target.value);
            e.target.value = ""; // Clear input after adding
          }
        }}
      />
      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
