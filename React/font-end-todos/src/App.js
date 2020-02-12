import React, { useState } from "react";
import "./styles.css";
import Form from "./components/Form/Form";
import Todo from "./components/addTodo/Todo";

export default function App() {
    const URL = "https://g9kzg.sse.codesandbox.io/";
    const [todos, setTodos] = useState([
        { text: "first task", isCompleted: false }
    ]);
    const [value, setValue] = useState("");

    function addTodo(text) {
        let newTodo = [...todos, { text }];
        setTodos(newTodo);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTodo(value);
        setValue("");

    }

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

    const todo = todos.map((todo, key) => (
        <Todo
            className="todo"
            todo={todo}
            key={key}
            onClick={() => completeTodo(key)}
            deleteItem={() => removeTodo(key)}
        />
    ));

    const form = (
        <Form
            className="input"
            value={value}
            onChange={e => setValue(e.target.value)}
            onSubmit={handleSubmit}
        />
    );


    return (
        <div className="App">
            {form}
            {todo}
        </div>
    );
}
