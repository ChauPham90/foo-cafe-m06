import React, { useState } from "react";

const Todo = ({ todo, onClick, deleteItem }) => {
    const style = {
        textDecoration: todo.isCompleted ? "line-through" : ""
    }
    return (
        <div>
            <p onClick={onClick} style={style}>
                {todo.text}
            </p>
            <button onClick={deleteItem}>x</button>
        </div>
    )
};

export default Todo;
