import React from 'react';
import './index.scss';

export default class NavBar extends React.Component {
  render() {
    return (
    <div className="navbar">
      <div>
        <span>
          <a href="/">
            <span className="nav-item">Home</span>
          </a>
        </span>
        
        <span>
          <a href="/explore">
            <span className="nav-item">Explore</span>
          </a>
        </span>
        
        <span className="current-tab">
          <a href="/inbox">
            <span className="nav-item">Inbox</span>
          </a>
        </span>
      </div>
    </div>
    );
  }
};