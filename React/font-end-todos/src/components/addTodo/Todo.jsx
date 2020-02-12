import React, { useState } from "react";

const Todo = ({ todo, onClick, deleteItem }) => (
  <div>
    <p
      onClick={onClick}
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
    </p>
    <button onClick={deleteItem}>x</button>
  </div>
);

export default Todo;
