import React from 'react'
import { List, Box, UnorderedList, Flex, ListItem, Button } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'

const TodoItem = ({ id, title, completed}) => {
  return (
    
        
            <ListItem>
                <Flex padding="3">
                <Checkbox marginLeft="170px" checked={completed}>{title}</Checkbox>
                <Button colorScheme='red' size='md'  marginLeft="130" padding="">Delete</Button>
                </Flex>
            </ListItem>
        
    
    
  )
}

export default TodoItem