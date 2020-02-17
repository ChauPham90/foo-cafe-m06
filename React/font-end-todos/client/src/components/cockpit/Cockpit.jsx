import React, { useState } from "react";
import Todo from './Todo'


export default function Cockpit({ todos, setTodos }) {
    const URL = 'http://localhost:5000/'

    function completeTodo(index) {
        let newState = [...todos];
        newState[index].isCompleted = true;
        setTodos(newState);
        console.log(index);
    }

    function removeTodo(index) {
        let notItem = [...todos];
        notItem.splice(index, 1);
        setTodos(notItem);
        console.log(index);
    }

    return (todos.map((todo, key) => (
        <Todo
            todo={todo}
            click={() => completeTodo(key)}
            remove={() => removeTodo(key)}
            key={key}
        />
    )))
}










