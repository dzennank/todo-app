import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { Box } from '@chakra-ui/react';
import Totalitems from './components/Totalitems';


function App() {
  return (
    <Box>
      <AddTodoForm />
      <TodoList/>
      <Totalitems />
    </Box>
    
  );
}

export default App;
