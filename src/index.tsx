import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';

/**
 * Add your components here.
 */
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/404';
import Explore from './components/pages/Explore';
import NavBar from './components/widgets/NavBar';

const App = () => (
  <React.StrictMode>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/feed" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/explore" component={Explore} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('react-root'));