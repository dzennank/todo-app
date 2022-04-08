import React from 'react'
import { Checkbox, List } from '@chakra-ui/react'
import TodoItem from './TodoItem'

const TodoList = () => {
    const todos = [
        { id: 1, title: 'todo1', completed: true},
        { id: 2, title: 'todo2', completed: false},
        { id: 3, title: 'todo3', completed: false},
        { id: 4, title: 'todo4', completed: false},
        { id: 5, title: 'todo5', completed: false},
    ]


  return (
    <List>
        {todos.map((todo) => (
            <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}/>
        ))}
    </List>
  )
}

export default TodoList