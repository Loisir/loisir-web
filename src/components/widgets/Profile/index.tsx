import React from 'react';
import { labelNumber } from '../../../utils';
import Avatar from '../Avatar';
import './index.scss';
import gfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

interface ProfileProps {
  avatarUrl?: string,
  username: string,
  aboutMe?: string,
  location?: string,
  credibility: number,
  followers: number,
  following: number
};

export default class Profile extends React.Component<ProfileProps> {
  async onFollowClicked() {
    console.log('Followed!');
  }

  render() {
    let locationDiv;
    if (this.props.location) {
      locationDiv = (
        <div>
          <img alt="" src="/images/maps-and-flags.png"/>
          <span>{this.props.location}</span>
        </div>
      );
    }
    else {
      locationDiv = (
        <div></div>
      );
    }

    return (
      <div className="profile-container">
        <div className="profile-avatar">
          <Avatar src={this.props.avatarUrl} size={80}/>
        </div>
        <div className="profile-details">
          <div className="profile-primary">
            <div>{this.props.username}</div>
            <div>
              <ReactMarkdown plugins={[[gfm, {singleTilde: false}]]}>
                {this.props.aboutMe || ""}
              </ReactMarkdown>
            </div>
            {locationDiv}
          </div>
          <div className="profile-stats">
            <div className="stat-flex">
              <div className="stat">
                <p>Credibility</p>
                <p>{labelNumber(this.props.credibility)}</p>
              </div>
              <div className="stat">
                <p>Followers</p>
                <p>{labelNumber(this.props.followers)}</p>
              </div>
              <div className="stat">
                <p>Following</p>
                <p>{labelNumber(this.props.following)}</p>
              </div>
            </div>
            
            <div className="follow-btn">
              <button onClick={this.onFollowClicked}>Follow</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};