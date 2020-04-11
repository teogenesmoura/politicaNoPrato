import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar';
import MainSection from './containers/MainSection';
import ExplanationSection from './containers/ExplanationSection';
import theme from './containers/theme';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSection />
      <ExplanationSection theme={theme}/>
    </div>  
  );
}

export default App;
