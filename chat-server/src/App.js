import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router'
import Message from './components/Message'
import House from './components/House'
import Room from './components/Room'

function App() {


  return (
    <>
    <Switch>
      <Route exact path='/' component={House} />
      <Route path='/chat' component={Room} />
      <Route path='/message' component={Message} />
    </Switch>
    </>
    );
}

export default App;
