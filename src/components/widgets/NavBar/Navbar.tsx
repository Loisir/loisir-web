import React from 'react';
import './index.scss';
import {
  INavbarProps,
  NAV_BAR_ZINDEX
} from './Navbar.types';

interface INavbarState {}

export const NB = React.forwardRef<HTMLDivElement, INavbarProps>((props, ref) => {
  return (
    <div className="navbar"
      style ={{ zIndex: NAV_BAR_ZINDEX }}
    >
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
});

export class Navbar extends React.Component<INavbarProps, INavbarState> {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log(window.pageYOffset);
  }

  onBackClicked () {
    if (document.referrer.indexOf(window.location.host) !== -1 ) {
      window.history.back();
    }
    else {
      window.location.href = '/';
    }
  }

  render() {
    return (
      <div className="navbar"
        style ={{
          zIndex: NAV_BAR_ZINDEX
        }}>
        
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