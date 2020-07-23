import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router'
import House from './components/House'
import Room from './components/Room'
import Nav from"./components/Nav"
import Dogs from "./components/Dogs"

function App() {


  return (
    <>
    <Nav></Nav>
    {/* Creates paths for the various components and rooms */}
    <Switch>
    
      <Route exact path='/' component={House} />
      <Route path='/room' component={Room} />
      <Route path='/dogs' component={Dogs} />
    
    </Switch>
  
    </>
    );
}

export default App;
