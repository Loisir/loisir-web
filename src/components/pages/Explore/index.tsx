import React from 'react';

interface ExploreProps {
}

export default class Explore extends React.Component<ExploreProps> {
  render() {
    return (
      <div className="explore-view-container">
        <div className="explore-view">
          <span>Explore</span>
        </div>
      </div>
    );
  }
};