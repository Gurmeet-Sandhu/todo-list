import React, {useState, useEffect} from 'react';
import Facts from './Facts';

export default function Api(){

    const [appStatus, setAppStatus] = useState({
        loadingDone:false,
        data:null
    })

    useEffect(() => {
        const url = "https://cat-fact.herokuapp.com/facts";
        fetch(url)
        .then(response => response.json())
        .then(facts => {
            console.log(facts.all);
            const allFacts= facts.all;
            const factsToBeRendered = allFacts.map(fact => <li>{fact.text}</li>);
            setAppStatus({
                loadingDone:true,
                data:factsToBeRendered
            })
        })
    }, [setAppStatus])

    return(
        <Facts loadingDone = {appStatus.loadingDone} facts = {appStatus.data}/>
    )
}