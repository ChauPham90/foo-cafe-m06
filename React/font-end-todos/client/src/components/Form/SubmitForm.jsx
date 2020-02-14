import { todos, setTodos, setValue, value } from "../../App.js";

function addTodo(text) {
  let newTodo = [...todos, { text }];
  setTodos(newTodo);
}

function handleSubmit(e) {
  e.preventDefault();
  if (!value) return;
  addTodo(value);
  setValue("");
}

export default { handleSubmit, addTodo };
