import React from 'react';
import LogAndReg from './Components/Login/LogAndRegi';
import PrivateRoute from './Components/Login/PrivateRoute';
import Bookr from './Components/Bookr/Bookr';
import Payment from './Components/Bookr/Payment';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/log_reg" component={LogAndReg} />
      <PrivateRoute exact path="/bookr" component={Bookr} />
      <Route path="/payment" component={Payment} />
    </div>
  );
}

export default App;
