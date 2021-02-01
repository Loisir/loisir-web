import React from 'react';
import { DEFAULT_AVATAR_SIZE, IAvatarProps } from './Avatar.types';


export default class Avatar
  extends React.Component<IAvatarProps> {
  
  public static defaultProps = {
    size: DEFAULT_AVATAR_SIZE,
    isCircular: true
  };

  render() {
    return(
      <img
        alt=""
        style={{
          width: this.props.size,
          height: this.props.size,
          borderRadius: this.props.isCircular ? this.props.size : 0,
          ...this.props.style
        }}
        src={this.props.src}
        {...this.props}
      />
    );
  }

}