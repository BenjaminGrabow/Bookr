import React from 'react';
import LogAndReg from './Components/Login/LogAndRegi';
import PrivateRoute from './Components/Login/PrivateRoute';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={LogAndReg} />
    </div>
  );
}

export default App;
