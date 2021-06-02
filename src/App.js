import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home.js';
import About from './components/About.js';
import ProjectContainer from './containers/ProjectContainer.js'; 
import ArticlesContainer from './containers/ArticleContainer.js'; 
import Contact from './components/Contact.js';

// import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={ProjectContainer} />
        <Route path="/articles" component={ArticlesContainer} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
