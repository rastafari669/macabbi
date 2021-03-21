import React,{useEffect} from 'react';
import './App.css';
import AOS from 'aos';
import Form from './components/Form';
import Navigation from './components/Navigation';
import Users from './components/Users';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {

  useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);

  return (
    <Router>
    <div>
      <Navigation/>
      <Switch>
      <Route path='/' exact component={Form}/>
      <Route path='/users' component={Users}/>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
