import React from 'react';

interface ProfileAvatarProps {
  src?: string,
  size?: number
}

export default class ProfileAvatar extends React.Component<ProfileAvatarProps> {
  render() {
    return(
      <img
        alt=""
        style={{
          width: this.props.size || 52,
          height: this.props.size || 52,
          borderRadius: this.props.size || 52
        }}
        src={this.props.src || '/images/default-avatar.png'}
      />
    );
  }
}