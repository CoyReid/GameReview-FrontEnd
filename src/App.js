import React from 'react';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import NintendoPage from './components/NintendoPage';
import PCPage from './components/PCPage';
import PlayStationPage from './components/PlayStationPage';
import XboxPage from './components/XboxPage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ReviewPage from './components/ReviewPage';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/" exact>
          <MainPage/>
        </Route>
        <Route path="/game/:id">
          <ReviewPage/>
        </Route>
        <Route path="/nintendo" exact>
          <NintendoPage/>
        </Route>
        <Route path="/pc" exact>
          <PCPage/>
        </Route>
        <Route path="/playstation" exact>
          <PlayStationPage/>
        </Route>
        <Route path="/xbox" exact>
          <XboxPage/>
        </Route>
      </Switch>
    
    </div>
    </Router>
  );
}

export default App;
