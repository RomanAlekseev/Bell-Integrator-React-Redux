import React, { Component } from 'react';
import { 
  Switch,
  Router,
  Route,
  Link
} from 'react-router-dom';
import history from './history';
import Login from '../components/LoginPage';

const Organisation = () => <h1>Организации</h1>

//function checkLogin() {
//  const login = window.localStorage.getItem('rr_login');
//  const password = window.localStorage.getItem('rr_pass');
//  if (login === 'admin') {
//    console.log('пропусти')
//  }
//}

function checkLogin() {
    alert('пропусти');
}

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/department' onEnter={checkLogin} component={Organisation} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;