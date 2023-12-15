import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Signup } from './components/Signup';
import { Success } from './components/Success';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
