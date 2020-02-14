import React, { useState } from "react";
import "./styles.css";
import SubmitForm from "./components/Form/SubmitForm";
import AddTodo from "./components/addTodo/AddToDo";

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



    return (
        <div className="App">
            <SubmitForm
                value={value}
                setValue={setValue}
                addTodo={addTodo} />
            <AddTodo
                URL={URL}
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    );
}
