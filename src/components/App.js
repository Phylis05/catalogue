import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import DrinkList from '../containers/DrinksList';
import ShowDrink from './ShowDrink';

function App() {
  return (

    <Router>
      <div className="container">
        <div className="nav">
          <h1>WINE CATALOGUE</h1>
        </div>
        <Switch>
          <Route exact path="/">
            <DrinkList />
          </Route>
          <Route
            path="/:idDrink"
            exact
            component={ShowDrink}
          />
        </Switch>
      </div>

    </Router>

  );
}

export default App;
