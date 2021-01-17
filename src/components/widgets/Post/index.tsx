import React from 'react';
import moment from 'moment';
import './index.scss';
import Avatar from '../Avatar';
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
      <div className="post">
        <div className="image-container">
          <img src={this.props.url} alt="" />
        </div>

        <div className="post-info">
          <div>
            <div className="avatar-container">
              <Avatar src={this.props.avatarUrl} size={40}/>
            </div>

            <div className="post-username-age">
              <span>{this.props.username}</span>
              <span>Posted {this.props.createdTime.fromNow()}</span>
            </div>
          </div>

          <div className="post-actions">
            <span>{labelNumber(this.props.likes || 0)}</span>
            <span>{labelNumber(this.props.comments || 0)}</span>
          </div>
        </div>
      </div>
    );
  }
};