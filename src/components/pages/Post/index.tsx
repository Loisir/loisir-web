import React from 'react';

interface PostProps {
  url: string,
  caption: string,
  authorPicUrl: string,
  username: string,
  likes: number,
  createdDate: Date
}

export default class Post extends React.Component<PostProps> {
  render() {
    return (
      <main>
        <div className="post-container">
          <div className="image-container">
            <img src={this.props.url} alt="" />
          </div>
        </div>
      </main>
    );
  }
};