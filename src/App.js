import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar';
import Content from './containers/Content';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
    </div>  
  );
}

export default App;
