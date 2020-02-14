import React, { useState, useEffect } from "react";
import Todo from "./Todo";


const AddToDo = pros => {

    function loading() {
        fetch(pros.URL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                pros.setTodos(data);
            })
            .catch(err => console.log(err.message));
    }

    useEffect(() => {
        loading()
    }, [])


    function completeTodo(index) {
        let newState = [...pros.todos];
        newState[index].isCompleted = true;
        pros.setTodos(newState);
        console.log(index);
    }

    function removeTodo(index) {
        let notItem = [...pros.todos];
        notItem.splice(index, 1);
        pros.setTodos(notItem);
        console.log(index);
    }

    return (
        <div>
            {pros.todos.map((todo, key) => (
                <Todo
                    className="todo"
                    todo={todo}
                    key={key}
                    onClick={() => completeTodo(key)}
                    deleteItem={() => removeTodo(key)}

                />
            ))}
            <button onClick={loading}>loading</button>
        </div>
    );
};

export default AddToDo;
