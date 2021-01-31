import React from 'react';
import './index.scss';
import { generateAvatarSvg } from '../../../utils';

interface IExploreProps {
}

export default class Explore extends React.Component<IExploreProps> {
  render() {
    return (
      <div className="explore">
        <p>Explore</p>
        {generateAvatarSvg('#FF00FF')}
      </div>
    );
  }
};