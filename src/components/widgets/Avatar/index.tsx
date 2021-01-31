import React from 'react';

export const DEFAULT_AVATAR_SIZE = 52;

interface IAvatarProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  /**
   * Avatar source
   */
  src?: string,

  /**
   * Size of the Avatar.
   * Default value is DEFAULT_AVATAR_SIZE.
   */
  size?: number,

  /**
   * Whether or not this avatar is circular.
   * Default value is true.
   */
  isCircular: boolean
}

export default class Avatar extends React.Component<IAvatarProps> {
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
        src={this.props.src || '/images/default-avatar.png'}
        {...this.props}
      />
    );
  }
}