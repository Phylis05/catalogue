import React from 'react';
import '../styles/App.css';
import DrinkList from '../containers/DrinksList';

function App() {
  return (
    <div className="container">
      <div className="nav">
        <h1>WINE CATALOGUE</h1>
        <input type="text" placeholder="Search" />
      </div>
      <DrinkList />
    </div>
  );
}

export default App;
