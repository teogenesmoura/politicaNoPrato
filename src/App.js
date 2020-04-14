import React from 'react';
import logo from './logo.svg';
import NavBar from './containers/NavBar';
import MainSection from './containers/MainSection';
import ExplanationSection from './containers/ExplanationSection';
import ContactSection from './containers/ContactSection';
import Footer from './containers/Footer';
import theme from './containers/theme';

function App() {
  return (
    <div className="App">
      <NavBar />
			<MainSection />
			<ExplanationSection theme={theme}/>
			<ContactSection theme={theme}/>
			<Footer />
    </div>  
  );
}

export default App;

      // <ExplanationSection theme={theme}/>
      // <Footer />