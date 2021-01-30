import React, {
  lazy,
  Suspense
} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './index.scss';

import Navbar from './components/widgets/Navbar';

/**
 * Add your components here.
 */
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Explore = lazy(() => import('./components/pages/Explore'));
const NotFound = lazy(() => import('./components/pages/404'));

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/feed" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/explore" component={Explore} />
          <Route component={NotFound}/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('react-root'));