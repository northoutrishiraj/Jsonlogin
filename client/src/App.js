import React from 'react';
import './App.css';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Contacts from './Components/Contacts/Contacts';
import Demo from './Components/Demo';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Login}></Route> 
            <Route path='/registration' component={Registration}></Route> 
            <Route path='/dashboard' component={Dashboard}></Route> 
            <Route path='/contacts' component={Contacts}></Route> 
            <Route path='/demo' component={Demo}></Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
