import React from 'react';
import ProfileAvatar from '../../widgets/ProfileAvatar';

export default class Home extends React.Component {
  render() {
    return (
      <main>
        <div className="Home-container">
          <ProfileAvatar />
          <span>Home</span>
        </div>
      </main>
    );
  }
};