import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import NavBar from './components/NavBar';

function App() {
  return(
    <Router>
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route component={NoMatch}/>
            </Switch>
        </div>
    </Router>
   );
}

export default App;