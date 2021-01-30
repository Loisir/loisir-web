import React from 'react';
import moment from 'moment';
import Avatar from '../Avatar';
import { labelNumber } from '../../../utils';
import gfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import './index.scss';

interface PostProps {
  /**
   * Post image source url
   */
  url: string,

  /**
   * Author profile avatar image url
   */
  avatarUrl: string,

  /**
   * Author username
   */
  username: string,

  /**
   * Post creation time/date
   */
  createdTime: moment.Moment

  /**
   * Post caption.
   * Expects markup text.
   */
  caption: string,

  /**
   * Likes on this post.
   */
  likes: number,
  
  /**
   * Likes on this post.
   */
  comments: number,
}

export default class Post extends React.Component<PostProps> {
  onOptionsClicked() {
    console.log("Options clicked!");
  }

  onPostImageClicked() {
    console.log("Image clicked!");
  }

  onLikeClicked() {
    console.log("Like clicked!");
  }

  onCommentsClicked() {
    console.log("Comments clicked!");
  }

  render() {
    return (
      <div className="post">
        <div className="post-info">
          <div>
            <div className="avatar-container">
              <Avatar src={this.props.avatarUrl} size={40}/>
            </div>

            <div className="post-header">
              <span className="post-header-username">{this.props.username}</span>
              <span className="post-header-age">Posted {this.props.createdTime.fromNow()}</span>
            </div>
          </div>

          <div className="post-options" title="Options">
            <button onClick={this.onOptionsClicked}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" version="1.1" className="options-svg">
                <g id="surface1">
                  <path d="M 15 11.4375 C 15 13.09375 13.65625 14.4375 12 14.4375 C 10.34375 14.4375 9 13.09375 9 11.4375 C 9 9.78125 10.34375 8.4375 12 8.4375 C 13.65625 8.4375 15 9.78125 15 11.4375 Z M 15 11.4375 "/>
                  <path d="M 6 11.4375 C 6 13.09375 4.65625 14.4375 3 14.4375 C 1.34375 14.4375 0 13.09375 0 11.4375 C 0 9.78125 1.34375 8.4375 3 8.4375 C 4.65625 8.4375 6 9.78125 6 11.4375 Z M 6 11.4375 "/>
                  <path d="M 24 11.4375 C 24 13.09375 22.65625 14.4375 21 14.4375 C 19.34375 14.4375 18 13.09375 18 11.4375 C 18 9.78125 19.34375 8.4375 21 8.4375 C 22.65625 8.4375 24 9.78125 24 11.4375 Z M 24 11.4375 "/>
                </g>
              </svg>
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
            <span onClick={this.onLikeClicked} title="Likes">
              <span className="post-action-svg-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" version="1.1" className="post-action-svg">
                  <g id="surface1">
                    <path d="M 17.195312 2.066406 C 15.191406 2.054688 13.289062 2.933594 12 4.464844 C 10.71875 2.921875 8.808594 2.042969 6.804688 2.066406 C 3.046875 2.066406 0 5.113281 0 8.871094 C 0 15.3125 11.242188 21.601562 11.695312 21.84375 C 11.878906 21.964844 12.121094 21.964844 12.304688 21.84375 C 12.757812 21.601562 24 15.402344 24 8.871094 C 24 5.113281 20.953125 2.066406 17.195312 2.066406 Z M 12 20.628906 C 10.238281 19.59375 1.214844 14.097656 1.214844 8.871094 C 1.214844 5.785156 3.71875 3.28125 6.804688 3.28125 C 8.695312 3.257812 10.464844 4.210938 11.484375 5.800781 C 11.691406 6.085938 12.089844 6.152344 12.375 5.945312 C 12.429688 5.90625 12.476562 5.855469 12.515625 5.800781 C 14.207031 3.21875 17.671875 2.492188 20.253906 4.183594 C 21.835938 5.21875 22.789062 6.980469 22.785156 8.871094 C 22.785156 14.15625 13.761719 19.625 12 20.628906 Z M 12 20.628906 "/>
                  </g>
                </svg>
              </span>

              <span className="post-action-value">
                <p>{labelNumber(this.props.likes || 0)}</p>
              </span>
            </span>

            <span onClick={this.onCommentsClicked} title="Comments">
              <span className="post-action-svg-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" version="1.1" className="post-action-svg">
                  <g id="surface1">
                    <path d="M 3.492188 22.566406 L 1.792969 22.566406 L 2.996094 21.363281 C 3.644531 20.714844 4.046875 19.871094 4.15625 18.957031 C 2.464844 17.847656 1.226562 16.386719 0.566406 14.710938 C -0.0976562 13.035156 -0.179688 11.195312 0.324219 9.382812 C 0.929688 7.207031 2.351562 5.226562 4.324219 3.800781 C 6.464844 2.253906 9.136719 1.433594 12.039062 1.433594 C 15.699219 1.433594 18.785156 2.484375 20.960938 4.472656 C 22.921875 6.265625 24 8.683594 24 11.28125 C 24 12.542969 23.742188 13.769531 23.238281 14.929688 C 22.710938 16.128906 21.945312 17.199219 20.953125 18.105469 C 18.777344 20.101562 15.691406 21.15625 12.039062 21.15625 C 10.683594 21.15625 9.269531 20.976562 8.003906 20.644531 C 6.808594 21.871094 5.1875 22.566406 3.492188 22.566406 Z M 12.039062 2.84375 C 6.214844 2.84375 2.640625 6.316406 1.683594 9.757812 C 0.777344 13.011719 2.113281 16.085938 5.253906 17.984375 L 5.605469 18.195312 L 5.59375 18.605469 C 5.574219 19.414062 5.378906 20.195312 5.03125 20.902344 C 5.875 20.617188 6.640625 20.101562 7.238281 19.394531 L 7.539062 19.042969 L 7.980469 19.171875 C 9.21875 19.542969 10.660156 19.75 12.039062 19.75 C 19.289062 19.75 22.589844 15.359375 22.589844 11.28125 C 22.589844 9.082031 21.675781 7.035156 20.007812 5.515625 C 18.097656 3.765625 15.34375 2.84375 12.039062 2.84375 Z M 12.039062 2.84375 "/>
                  </g>
                </svg>
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