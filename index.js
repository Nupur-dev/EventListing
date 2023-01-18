import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import EventItems from './EventItems';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/categories/:categoryId' component={EventItems} />
        <Route path='/' component={Menu} />
      </Switch>
    </Router>
  );
}

export default App;


