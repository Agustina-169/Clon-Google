import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Router>
     <Home/>
     </Router>
    </div>
  );
}

export default App;
