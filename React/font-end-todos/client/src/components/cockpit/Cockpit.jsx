import React, { useState, useEffect } from "react";
import Todo from './Todo/Todo'
import PropTypes from 'prop-types';


export default function Cockpit({ todos, setTodos }) {
    const URL = 'http://localhost:5000/'


    console.log(todos)


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

Cockpit.propTypes = {
    todos: PropTypes.array,
    setTodos: PropTypes.func
}








