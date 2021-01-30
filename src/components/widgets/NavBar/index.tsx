import React from 'react';
import './index.scss';

export const NAV_BAR_ZINDEX = 100;

export default class Navbar extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log(window.pageYOffset);
  }

  onBackClicked = () => {
    if (document.referrer.indexOf(window.location.host) !== -1 ) {
      window.history.back();
    }
    else {
      window.location.href = '/explore';
    }
  }

  render() {
    return (
    <div className="navbar"
      style ={{
        zIndex: NAV_BAR_ZINDEX
      }}>
      <div className="back-btn" onClick={this.onBackClicked}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
          <g id="surface1">
            <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"/>
          </g>
        </svg>
      </div>
      <div className="navbar-container">
        <span className="nav-tab">
          <a href="/">
            <span className="tab-span">Home</span>
          </a>
        </span>
        
        <span className="nav-tab">
          <a href="/explore">
            <span className="tab-span">Explore</span>
          </a>
        </span>
        
        <span className="nav-tab current-tab">
          <a href="/inbox">
            <span className="tab-span">Inbox</span>
          </a>
        </span>
      </div>
    </div>
    );
  }
};