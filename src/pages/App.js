import * as React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainSection from "../sections/MainSection";
import NavBar from '../components/NavBar'
import ProjectContainer from '../containers/ProjectContainer.js'; 
import Articles from '../containers/ArticleContainer.js'; 
import About from '../containers/AboutContainer.js';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bryn Knowles</h1>
      </header>
      <Router>
        <NavBar />
          <Route exact path="/" component={ProjectContainer} />
          <Route path="/articles" component={Articles} />
          <Route path="/about" component={About} />
      </Router>
      <MainSection />;
    </div>
  );
}

export default App;
