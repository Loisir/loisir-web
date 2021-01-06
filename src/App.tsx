import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

/**
 * Add your components here.
 */
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/404';
import Post from './components/pages/Post';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post" component={Post} />
        <Route component={NotFound}/>
      </Switch>
    );
  }
};