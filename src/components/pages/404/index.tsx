import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class NotFound extends React.Component {
  render() {
    return (
      <main className="not-found">
        <div className="message">
          <h3>Oops this page doesn't exist.</h3>
          <p>We couldn't find what you were looking for</p>
          <Link to="/">
            <span>Go back to home</span>
          </Link>
        </div>
      </main>
    );
  }
};