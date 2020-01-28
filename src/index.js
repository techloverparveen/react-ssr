import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Users from './Users';
import Contact from './Contact'
import * as serviceWorker from './serviceWorker';
import NotFound from './NotFound';



const routing = (
    <Router>
        <div>
            <ul>
                <li> <NavLink activeClassName="active" to ="/">Home </NavLink></li>
                <li> <NavLink activeClassName="active" to = "/users">Users</NavLink></li>
                <li> <NavLink  activeClassName="active" to = "/contact">Contact</NavLink></li>
                </ul>
                <Switch>
                <Route exact path="/" component = {App} />
            <Route path="/users" component ={Users}/>
             <Route path = "/contact" component ={Contact}/>   
             <Route component={NotFound}/>
                    </Switch>
           
            </div>
    </Router>
)
ReactDOM.hydrate(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();