import React from 'react';

interface CircularImageProps {
  src?: string,
  size: number
}

export default class CircularImage extends React.Component<CircularImageProps> {
  render() {
    return(
      <img
        alt=""
        style={{
          width: this.props.size,
          height: this.props.size,
          borderRadius: this.props.size
        }}
        src={this.props.src || ""}
      />
    );
  }
}