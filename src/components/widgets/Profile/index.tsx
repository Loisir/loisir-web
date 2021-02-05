import React from 'react';
import './index.scss';
import { labelNumber } from '../../../utils';
import { Avatar } from '../Avatar';
import gfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

interface IProfileProps {
  /**
   * Profile avatar url.
   */
  avatarUrl: string,
  username: string,
  aboutMe?: string,
  location?: string,
  credibility: number,
  followers: number,
  following: number

  /**
   * Minimal Post View.
   * Hides most details.
   * 
   * Defaults to false
   */
  isMinimalView?: boolean
};

export default class Profile extends React.Component<IProfileProps> {
  public static defaultProps = {
    isMinimalView: false
  }

  onFollowClicked() {
    console.log('Followed!');
  }

  locationDiv() {
    if (this.props.location) {
      return (
        <div>
          <img alt="" src="/images/maps-and-flags.png"/>
          <span>{this.props.location}</span>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="profile">
        <div className="profile-avatar">
          <Avatar src={this.props.avatarUrl} size={32}/>
        </div>

        <div className="profile-details">
          <div className="profile-primary">
            <div>
              {this.props.username}
            </div>
            {
              this.props.aboutMe &&
              <div>
                <ReactMarkdown
                  plugins={[[gfm, {singleTilde: false}]]}>
                  {this.props.aboutMe}
                </ReactMarkdown>
              </div>
            }
            {
              this.props.location &&
              <div>
                <img alt="" src="/images/maps-and-flags.png"/>
                <span>{this.props.location}</span>
              </div>
            }
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
            
            <div className="follow-div">
              <button onClick={this.onFollowClicked}>
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};