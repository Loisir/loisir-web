import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <div className="message">
          <p>Oops! this page doesn't exist.</p>
          <p>We couldn't find what you were looking for.</p>
          <Link to="/">
            <span>Go back to home</span>
          </Link>
        </div>
      </div>
    );
  }
};