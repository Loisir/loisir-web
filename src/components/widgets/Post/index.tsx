import React from 'react';
import moment from 'moment';
import './index.scss';
import Avatar from '../Avatar';
import { labelNumber } from '../../../utils';
import gfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

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
  async onOptionsClicked() {
    await console.log("Options clicked!");
  }

  async onPostImageClicked() {
    await console.log("Image clicked!");
  }

  async onLikeClicked() {
  }

  async onCommentsClicked() {
  }

  render() {
    return (
      <div className="post">
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

          <div className="post-options">
            <button onClick={this.onOptionsClicked}>
              <img src="/images/ellipsis.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className="post-caption">
          <ReactMarkdown plugins={[[gfm, {singleTilde: false}]]}>
            {this.props.caption || ""}
          </ReactMarkdown>
        </div>
        
        <div className="image-container" onClick={this.onPostImageClicked}>
          <img src={this.props.url} alt="" />
        </div>

        <div className="post-info">
          <div className="post-actions">
            <span onClick={this.onLikeClicked}>
              <span className="post-action-img">
                <img src="/images/heart.png" alt=""/>
              </span>

              <span className="post-action-value">
                <p>{labelNumber(this.props.likes || 0)}</p>
              </span>
            </span>

            <span onClick={this.onCommentsClicked}>
              <span className="post-action-img">
                <img src="/images/comments.png" alt=""/>
              </span>

              <span className="post-action-value">
                <p>{labelNumber(this.props.comments || 0)}</p>
              </span>
            </span>
          </div>  
        </div>
      </div>
    );
  }
};