import { Router } from 'express'// import express from 'express';

import {Todo} from '../models/todo'

let todos: Todo[] = [];

const router = Router();// const router = express.Router();

router.get('/', (req, res, next) =>{
     res.status(200).json({todos:  todos})
})

router.post('/todo', (req, res, next) =>{
    const newTodo: Todo = {
        id:new Date().toString(),
        text: req.body.text
    };

    todos.push(newTodo);

    res.status(201).json({ message: 'Todo created successfully', todo: newTodo });
})

router.post('/todo/e/:todoId',(req, res, next)=>{
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if(todoIndex >=0){
      todos[todoIndex] = {
        id: todos[todoIndex].id,
        text: req.body.text
      };
      return res.status(200).json({ message: 'Todo updated successfully', todo: todos });
    }
    res.status(404).json({ message: 'could not find todo for this id'});
})

router.post('/todo/d/:todoId', (req, res, next) =>{ //delete route
    todos = todos.filter(todoItem => todoItem.id !== req.params.todoId);
    res.status(200).json({message: 'deleted todo', todos: todos});
})

export default router;// module.exports = router;
