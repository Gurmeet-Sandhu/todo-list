import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import Todo from "./components/Todo"
import Form from "./components/Form"
import FilterButton from "./components/FilterButton"

function App(props) {

  const [tasks, setTasks] = useState(props.tasks)
  const [filter, setFilter] = useState('All');

  const FILTER_MAP ={
    All : (task) => true,
    Active : (task) => !task.completed,
    Completed : (task) => task.completed
  }

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList =  FILTER_NAMES.map(name => (
    <FilterButton 
      key = {name} 
      name = {name}
      isPressed = {name === filter}
      setFilter = {setFilter}/>
  ))
  
  function addTask(name){
    const newTask = {id: "todo-" + nanoid(), name: name, completed: false}
    setTasks([...tasks, newTask])
  }

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map((task) => {
      if(task.id === id){
        return {...task, completed : !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  function deleteTask(id){
    const remainingTasks = tasks.filter(task => id !== task.id)
    setTasks(remainingTasks)
  }

  function editTask(id, newName){
    const editedTaskList = tasks.map(task => {
      if(id === task.id){
        return {...task, name: newName}
      }
      return task;
    })
    setTasks(editedTaskList);
  }
  
  const taskList = tasks
  .filter(task => FILTER_MAP[filter](task))
  .map((task) => {
    return(
      <Todo 
        id = {task.id} 
        name = {task.name} 
        completed = {task.completed}
        key = {task.id}
        toggleTaskCompleted = {toggleTaskCompleted}
        deleteTask = {deleteTask}
        editTask = {editTask}
      />
    )
  })

  const tasksNoun = taskList.length!==1 ? 'tasks' : 'task'
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className = "todoapp stack-large">
      <h1>Todo List</h1>
      <Form addTask = {addTask}/>
      <div className = "filters btn-group stack-exception">
        {filterList}
      </div>
      <div>
        <h2 id = "list-heading">{headingText}</h2>
        <ul className = "todo-list stack-large stack-exception" >
          {taskList}
        </ul>
      </div>
    </div>
    
  );
}

export default App;
