import React from 'react';
import { Link } from 'react-router-dom';
import ProfileAvatar from '../ProfileAvatar';
import './index.scss';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <div>
          <span className="current-tab">
            <Link to="/home">
              <img alt="" src="/images/home.png"/>
            </Link>
          </span>
          <span>
            <Link to="/explore">
              <img alt="" src="/images/explore.png"/>
            </Link>
          </span>
          <span>
            <Link to="/notifications">
              <img alt="" src="/images/notification.png"/>
            </Link>
          </span>
          <span>
            <Link to='/home'>
              <ProfileAvatar size={26}/>
            </Link>
          </span>
        </div>
      </div>
    );
  }
};