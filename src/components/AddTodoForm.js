import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

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
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
      title: value,
    })
    );
  };
  return (
    <Flex 
    marginLeft="130px"
    marginTop="30px"
    padding="10"
    >
        <Box>
          <FormControl isRequired>
          <FormLabel htmlFor='add-todo'>My Todo List</FormLabel>
          <Input id='add-todo' 
          placeholder='Add todo...' 
          value={value} 
          onChange={(event) => setValue(event.target.value) }
          />
          <Button 
          colorScheme='teal'
           size='md' 
           padding="2" 
           marginTop="2" 
           onClick={handleSubmit}>Submit
           </Button>
          </FormControl>
          
        </Box>
    </Flex>
  )
}

export default AddTodoForm