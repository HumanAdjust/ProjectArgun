import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './main/main'
import Login from './user/Login';
import SignUp from './user/SignUp';
import NotFound from './404NotFound';

function App() {
  const title='Argun';
  
  return (
      <Router>
        <header>
          <div class="Logo"><Link to="/">{title}</Link></div>
          <div class="account">
              <Link to="/Login">Login</Link> | <Link to="/SignUp">Sign Up</Link> | <a href="#">My Page</a>
          </div>
          <br />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route component={NotFound} />
          </Switch>
        </main>
    </Router>
  );
}

export default App;
