import React from 'react';
import Signup from './components/Signup';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/signup' component={Signup} exact />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
