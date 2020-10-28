import React ,{useState} from 'react';
import ThemeContext from './ThemeContext';

export default function AppProvider(props){
    const theme = useState('light');
    return(
        <ThemeContext.Provider value = {theme}>
            {props.children}
        </ThemeContext.Provider>
    )
}