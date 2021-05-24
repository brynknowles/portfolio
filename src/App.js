import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js';
// import './App.css';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bryn Knowles</h1>
        <Router>
          <NavBar />
            <Route exact path="/" component={Projects} />
            <Route path="/articles" component={Articles} />
            <Route path="/about" component={About} />
        </Router>
      </header>
    </div>
  );
}

export default App;
