import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navbar from './components/Navbar';
import ThemeToggler from './components/ThemeToggler';
import AppTheme from './AppTheme';
import ThemeContext from './ThemeContext';
import Api from './components/Api';

export default function App(){
  return(
      <div className = "todoapp stack-large" style = {AppTheme[useContext(ThemeContext)[0]]}>
        <Navbar/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About}/>
          <Route path='/api' component={Api}/>
          <Route component={Error}/>
        </Switch>
        <ThemeToggler/>
      </div>
  )
}