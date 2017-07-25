import React, { Component } from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import About from './components/About';
import './css/index.css';



ReactDOM.render((

        <Router history={browserHistory}>
            <div>
            <Route path="/" component={TodoApp}></Route>
            <Route path="/about" component={About}></Route>
            </div>
        </Router>

), document.getElementById('app'));
