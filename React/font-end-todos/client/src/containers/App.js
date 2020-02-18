import React, { useState, useEffect } from "react";
import "./styles.css";
import Form from "../components/Form/Form";
import Cockpit from "../components/cockpit/Cockpit";



export default function App() {
    const [todos, setTodos] = useState([
        { text: "first task", isCompleted: false }
    ]);
    const URL = 'http://127.0.0.1:5000'
    useEffect(() => {
        fetch(URL)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setTodos(myJson)
            });
    }, [])

    function addTodo(text) {
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify(text)
        })
            .then(response => response.json())
            .then(() => {
                //setUsers([...users, user]);
                let newTodo = [...todos, { text }];
                setTodos(newTodo);

            })
            .catch(err => {
                console.log(err.message);
            });
    };



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
