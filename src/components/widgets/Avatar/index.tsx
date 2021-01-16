import React from 'react';

interface AvatarProps {
  src?: string,
  size?: number
}

export default class Avatar extends React.Component<AvatarProps> {
  render() {
    return(
      <img
        alt=""
        style={{
          width: this.props.size || 52,
          height: this.props.size || 52,
          borderRadius: this.props.size || 52,
        }}
        src={this.props.src || '/images/default-avatar.png'}
      />
    );
  }
}