import React from "react";

export default function FilterButton(props){
    return (
        <button 
            key = {props.name} 
            type = "button" 
            className = "btn toggle-btn" 
            aria-pressed = {props.isPressed}
            onClick = {() => props.setFilter(props.name)}
        >
            <span className = "visually-hidden">show</span>
            <span>{props.name}</span>
            <span className = "visually-hidden">tasks</span>
        </button>
    )
}