import { todos, setTodos } from "../../App.js";

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

export default { completeTodo, removeTodo };
