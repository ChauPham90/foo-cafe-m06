'use strict';

// TODO: Write the homework code in this file
const express = require('express');
const path = require('path');
const app = express();
const todos = require('./todos');
const logger = require('./logger');
const uuid = require('uuid')

// innit middleware
app.use(logger)

// body parse Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
    // get all todos list
app.get('/api/todos', (req, res) => {
        res.json(todos)
    })
    //readtodo
app.get('/api/todos/:id', (req, res) => {
    const found = todos.some(todo => todo.id === parseInt(req.params.id));
    if (found) {
        res.json(todos.filter(todo => todo.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `No todo with id of ${req.params.id}` })
    }
})

// create todo
app.post('/api/todos', (req, res) => {
    const newTodo = {
        id: req.body.id,
        homework: req.body.homework,
        description: req.body.description
    }

    if (!newTodo.homework || !newTodo.description) {
        return res.status(400).json({ msg: ' Please include relevant imformation' })
    }
    todos.push(newTodo);
    res.json(todos)
})

// update todo
app.put('/api/todos/:id', (req, res) => {
    const found = todos.some(todo => todo.id === parseInt(req.params.id));
    if (found) {
        const updateTodo = req.body;
        todos.forEach(todo => {
            if (todo.id === parseInt(req.params.id)) {
                todo.homework = updateTodo.homework ? updateTodo.homework : todo.homework;
                todo.description = updateTodo.description ? updateTodo.description : todo.description;
                res.json({ msg: 'todo updated', todo })
            }
        });
    } else {
        res.status(400).json({ msg: `No todo with id of ${req.params.id}` })
    }
})

// delete
app.delete('/api/todos/:id', (req, res) => {
    const found = todos.some(todo => todo.id === parseInt(req.params.id));
    if (found) {
        res.json({ msg: 'todo deleted', todo: todos.filter(todo => todo.id !== parseInt(req.params.id)) })
    } else {
        res.status(400).json({ msg: `No todo with id of ${req.params.id}` })
    }
})

// patch
app.patch('/api/todos/:id', (req, res) => {
    const found = todos.some(todo => todo.id === parseInt(req.params.id));
    if (found) {
        res.json({ msg: 'todo patched', todo: todos.filter(todo => todo.id === parseInt(req.params.id)) })
    } else {
        res.status(400).json({ msg: `No todo with id of ${req.params.id}` })
    }
})


//set static folder
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`sever start on ${PORT}`))