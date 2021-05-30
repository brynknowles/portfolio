import * as React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import MainSection from "../sections/MainSection";
import NavBar from '../components/NavBar'
import Home from '../components/Home.js';
import ProjectContainer from '../containers/ProjectContainer.js'; 
import ArticlesContainer from '../containers/ArticleContainer.js'; 
import About from '../components/About.js';
import Contact from '../components/Contact.js';

// import './App.css';

function App() {
  return (
    <div className="App">
      <h1>BK</h1>
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
