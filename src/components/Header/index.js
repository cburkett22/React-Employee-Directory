import React from 'react';
import './style.css';

function Header() {
  return (
    <div className="jumbotron">
      <header className="App-header">
        <h1 className="App-title display-4">Employee Directory</h1>
        <br />
        <p className="header-text">Click the table headers to sort!</p>
      </header>
    </div>
  );
}

export default Header;