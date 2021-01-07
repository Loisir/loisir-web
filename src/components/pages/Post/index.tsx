import React from 'react';
import moment from 'moment';

import ProfileAvatar from '../../widgets/ProfileAvatar';

interface PostProps {
  url: string,
  authorPicUrl: string,
  username: string,
  createdTime: moment.Moment
  caption?: string,
  likes?: number,
}

export default class Post extends React.Component<PostProps> {  
  constructor(props: PostProps) {
    super(props);

    this.state = {
      caption: '',
      likes: 0,
    };
  };
  
  render() {
    return (
      <main>
        <div className="post-container">
          <div className="image-container">
            <img src={this.props.url} alt="" />
          </div>
          <div className="post-info">
            <div className="profile-pic-container">
              <ProfileAvatar src={this.props.authorPicUrl} />
            </div>
            <div>
              <p>{this.props.username}</p>
              <p>Posted {this.props.createdTime.fromNow()}</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
};