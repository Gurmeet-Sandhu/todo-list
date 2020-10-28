import React from 'react';

export default function Facts(props){
    if(!props.loadingDone){
        return(<h1>Loading....</h1>)
    }
    return(
        <div>
            <h1>Amazing Cat Facts</h1>
            <ol>
            {props.facts}
            </ol>
        </div>
    )
}