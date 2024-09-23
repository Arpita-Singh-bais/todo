import React, { useState } from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import "./App.css"
import Message from './components/Message'
const App = () => {
  
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    
    // Create a new item and add it to the existing list of todoItems
    const newTodoItem = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    
    // Update the state with the new array
    setTodoItems(newTodoItem);
  };
   const handleDelete=(todoItemName)=>{
    const newTodoItems=todoItems.filter((item)=>item.name !== todoItemName);
    setTodoItems(newTodoItems);
   }
  return (
   <center className='todo-container'>
    <AppName/>
    <AddTodo onNewItem={handleNewItem}/>
     { todoItems.length===0 && <Message/>}
    <TodoItems todoItems={todoItems} onDelete={handleDelete}/>

   </center>
  )
}

export default App
