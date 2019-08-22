import React from 'react';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import NavBar from "./NavBarComponents/NavBar";
import Footer from "./FooterComponents/Footer"
import Home from './Home'
import Armor from './Armor'
import Potions from './Potions'
import Mats from './Mats'
import Misc from './Misc'
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route path = '/' exact component = {Home}/>
            <Route path = '/Armor' exact component = {Armor}/>
            <Route path = '/Potions' exact component = {Potions}/>
            <Route path = '/Mats' exact component = {Mats}/>
            <Route path = '/Misc' exact component = {Misc}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
