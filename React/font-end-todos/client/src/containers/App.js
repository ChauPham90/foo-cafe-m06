import React, { useState } from "react";
import "./styles.css";
import Form from "../components/Form/Form";
import Cockpit from "../components/cockpit/Cockpit";



export default function App() {
    const [todos, setTodos] = useState([
        { text: "first task", isCompleted: false }
    ]);

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
