import React from 'react';
import './index.scss';

export default class NavBar extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log(window.pageYOffset);
  }

  render() {
    return (
    <div className="navbar">
      <div className="container">
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