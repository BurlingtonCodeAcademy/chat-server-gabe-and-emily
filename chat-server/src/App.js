import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router'
import Message from './components/Message'
import House from './components/House'
import Room from './components/Room'
import Nav from"./components/Nav"
import Dogs from "./components/Dogs"

function App() {


  return (
    <>
    <Nav></Nav>
    <Switch>
    
      <Route exact path='/' component={House} />
      <Route path='/room' component={Room} />
      <Route path='/dogs' component={Dogs} />
      <Route path='/message' component={Message} />
    </Switch>
  
    </>
    );
}

export default App;
