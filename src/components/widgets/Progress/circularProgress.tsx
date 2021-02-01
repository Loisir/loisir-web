import React from 'react';

interface ICircularProgressProps
  extends Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "color"> {
  size?: string | number
};

export default class CircularProgress extends React.Component<ICircularProgressProps> {
  render() {
    return (
      <div className="circular-progress">
        
      </div>
    );
  }
}