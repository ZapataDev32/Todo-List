import React, { useState } from "react";

function TodoItem({ task, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.title);

  const handleEditing = () => {
    if (isEditing) {
      editTask(task.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span>{task.title}</span>
      )}
      <div className="button">
        <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
