import React from 'react'
import { List, Box, UnorderedList, Flex, ListItem, Button } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../redux/todoSlice'

const TodoItem = ({ id, title, completed}) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteTodo({id: id}))
  }
  return (
    
        
            <ListItem>
                <Flex padding="3">
                <Checkbox marginLeft="170px" checked={completed}>{title}</Checkbox>
                <Button colorScheme='red' size='md'  marginLeft="130" padding="" onClick={handleDelete}>Delete</Button>
                </Flex>
            </ListItem>
        
    
    
  )
}

export default TodoItem