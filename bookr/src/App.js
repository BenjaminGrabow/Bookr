import React from 'react';
import LogAndReg from './Components/Login/LogAndRegi';
import PrivateRoute from './Components/Login/PrivateRoute';
import AllBooks from './Components/Bookr/AllBooks/AllBooks';
import OneBook from './Components/Bookr/OneBook/OneBook';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/log_reg" component={LogAndReg} />
      <PrivateRoute exact path="/bookr" component={AllBooks} />
      <PrivateRoute path="/bookr/details" component={OneBook} />
    </div>
  );
}

export default App;
