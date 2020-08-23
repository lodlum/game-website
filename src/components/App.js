import React from "react";
import GameSelection from "./GameSelection";
import "../styling/App.css";
import TicTacPage from './TTT/TicTacPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="app">
            <div className="main-header">
              <span className="name">Lochlan.cc</span>
            </div>

            <div className="main">
              <GameSelection />
            </div>
          </div>
        </Route>

        <Route path="/ttt">
          <TicTacPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;