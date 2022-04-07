import React from 'react'
import { 
    Box,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Button,
    Checkbox, 
    CheckboxGroup
  } from '@chakra-ui/react';

const AddTodoForm = () => {
  return (
    <Flex 
    marginLeft="130px"
    marginTop="30px"
    padding="10"
    >
        <Box>
          <FormControl isRequired>
          <FormLabel htmlFor='add-todo'>My Todo List</FormLabel>
          <Input id='add-todo' placeholder='Add todo...' />
          <Button colorScheme='teal' size='md' padding="2" marginTop="2">Submit</Button>
          </FormControl>
          
        </Box>
    </Flex>
  )
}

export default AddTodoForm