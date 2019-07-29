import React from 'react';
import LogAndReg from './Components/Login/LogAndRegi';
import PrivateRoute from './Components/Login/PrivateRoute';
import AllBooks from './Components/Bookr/AllBooks/AllBooks';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/log_reg" component={LogAndReg} />
      <PrivateRoute path="/bookr" component={AllBooks} />
    </div>
  );
}

export default App;
