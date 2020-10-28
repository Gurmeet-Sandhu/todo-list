import React from 'react';

export default function ClearAllTasksButton(props){
    
    function handleClick(){
        localStorage.clear();
        props.handleClearAllTasks()
    }

    return(
        <button
          type="button"
          className="btn btn__primary btn__lg"
          onClick = {handleClick}
        >
          Clear all tasks
        </button>
    )
}