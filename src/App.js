import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar.component'
import {
  Home,
  ArticleDetail
} from './ScreenConfigs/ScreenConfig'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/detail" component={ArticleDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
