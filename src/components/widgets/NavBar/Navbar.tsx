import React, { forwardRef } from 'react';
import './index.scss';
import {
  INavbarProps,
  ITabProps,
  NAV_BAR_ZINDEX
} from './Navbar.types';

export const NB = React.forwardRef<HTMLDivElement, INavbarProps>((props, ref) => {
  return (
    <header className="navbar"
      style={{ zIndex: NAV_BAR_ZINDEX }}
      aria-orientation="vertical"
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
        
        <span className="nav-tab">
          <a href="/inbox">
            <span className="tab-span">
              <svg viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                </g>
              </svg>
            </span>
          </a>
        </span>
      </div>
    </header>
  );
});

export const Tab = forwardRef<HTMLDivElement, ITabProps>((props, ref) => {
  const {
    children
  } = props;

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
});

export class Navbar extends React.Component<INavbarProps, {}> {
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
      <header className="navbar"
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

          <span className="nav-tab" style={{float: "right"}}>
            <a href="/inbox">
              <span className="tab-span">
                <svg viewBox="0 0 22 22" style={{ width: "18px", height: "18px", fill: "white"}}>
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"/>
                  </g>
                </svg>
              </span>
            </a>
          </span>
        </div>
      </header>
    );
  }
};