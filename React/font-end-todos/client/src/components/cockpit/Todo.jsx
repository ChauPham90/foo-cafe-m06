import React, { useState } from "react";
import Button from '../UI/Button'

const Todo = ({ todo, click, remove, key }) => {
    const style = {
        textDecoration: todo.isCompleted ? "line-through" : ""
    }
    return (
        <div>
            <p onClick={click} style={style} key={key}>
                {todo.text}
            </p>
            <Button children='x' clicked={remove} />
        </div>
    )
};


export default Todo;
