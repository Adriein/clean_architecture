import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../App.css';

import Dashboard from './Dashboard';
import Diet from './Diet';
import Users from './Users';

function App() {
  console.log('render');
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/users" exact component={Users} />
      <Route path="/diet" exact component={Diet} />
      <Route path="/create-user" exact component={Diet} />
      <Route path="/create-diet" exact component={Diet} />
      <Route path="/create-plan" exact component={Diet} />
      <Route path="/charts" exact component={Diet} />
    </BrowserRouter>
  );
}

export default App;
