import React from 'react';
import moment from 'moment';

import ProfileAvatar from '../../widgets/ProfileAvatar';
import { labelNumber } from '../../../utils';

interface PostProps {
  url: string,
  avatarUrl?: string,
  username: string,
  createdTime: moment.Moment
  caption?: string,
  likes?: number,
  comments?: number 
}

export default class Post extends React.Component<PostProps> {
  render() {
    return (
      <main>
        <div className="post-container">
          <div className="image-container">
            <img src={this.props.url} alt="" />
          </div>
          <div className="post-info">
            <div className="profile-pic-container">
              <ProfileAvatar src={this.props.avatarUrl} />
            </div>
            <div className="post-details-container">
              <div className="post-username-age">
                <p>{this.props.username}</p>
                <p>Posted {this.props.createdTime.fromNow()}</p>
              </div>
              <div className="post-actions">
                <p>{labelNumber(this.props.likes || 0)}</p>
                <p>{labelNumber(this.props.comments || 0)}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
};