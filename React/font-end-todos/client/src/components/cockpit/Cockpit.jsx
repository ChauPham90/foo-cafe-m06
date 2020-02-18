import React, { useState, useEffect } from "react";
import Todo from './Todo'


export default function Cockpit({ todos, setTodos }) {
    const URL = 'http://127.0.0.1:5000/'

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setTodos(myJson)
            });
    }, [])



    function completeTodo(index) {
        let newState = [...todos];
        newState[index].isCompleted = true;
        setTodos(newState);
        console.log(index);
    }

    function removeTodo(index, id) {
        fetch(`${URL}${todos[index].id}`, { method: "DELETE", mode: "cors" })
            .then(() => {
                //                setTodos(todos.filter(todo => todo.id !== id));
                let notItem = [...todos];
                notItem.splice(index, 1);
                setTodos(notItem);
                console.log(index);
                console.log(todos[index].id)
                console.log(`${URL}${todos[index].id}`)

            })
            .catch(err => {
                console.log(err.message);
                console.log(err);
            });

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










