"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // import express from 'express';
let todos = [];
const router = (0, express_1.Router)(); // const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Todo created successfully', todo: newTodo });
});
router.post('/todo/e/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: req.body.text
        };
        return res.status(200).json({ message: 'Todo updated successfully', todo: todos });
    }
    res.status(404).json({ message: 'could not find todo for this id' });
});
router.post('/todo/d/:todoId', (req, res, next) => {
    todos = todos.filter(todoItem => todoItem.id !== req.params.todoId);
    res.status(200).json({ message: 'deleted todo', todos: todos });
});
exports.default = router; // module.exports = router;
