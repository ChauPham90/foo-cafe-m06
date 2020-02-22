import React, { useState, useEffect } from "react";
import "./styles.css";
import Form from "../components/Form/Form";
import Cockpit from "../components/cockpit/Cockpit";



export default function App() {
    const [todos, setTodos] = useState([
        { text: "first task", isCompleted: false }
    ]);
    const URL = 'http://127.0.0.1:3000/'


    useEffect(() => {
        fetch(URL)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setTodos(myJson)
            });
    }, [])

    console.log(todos)

    function addTodo(text) {
        let newTodo = [...todos, { text }];
        setTodos(newTodo);
    }

    return (
        <div className="App">
            <Form addTodo={addTodo} />
            <Cockpit
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    );
}
