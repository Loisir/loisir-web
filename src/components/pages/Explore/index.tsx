import React from 'react';
import './index.scss';
import { generateAvatarSvg } from '../../../utils';

interface ExploreProps {
}

export default class Explore extends React.Component<ExploreProps> {
  render() {
    return (
      <div className="explore">
        <p>Explore</p>
        {generateAvatarSvg('#FF00FF')}
      </div>
    );
  }
};