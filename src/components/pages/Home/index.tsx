import React from 'react';
import moment from 'moment';
import './index.scss';
import Profile from '../../widgets/Profile';
import Post from '../../widgets/Post';
import CreatePost from '../Create';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="home">
          {/* <CreatePost /> */}
          <Profile
            username="philiptrembley"
            aboutMe={'Use it to describe your **credentials**, expertise ✨, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to include based on your target audience.'}
            location="Vancouver, Canada"
            credibility={56}
            followers={72362}
            following={126}
            avatarUrl={'data:image/jpeg;base64,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'}
          />
          {/* <Profile
            username="jadenroth"
            location="Vancouver, Canada"
            credibility={5}
            followers={1}
            following={0}
          />
          <Profile
            username="philiptrembley"
            aboutMe={'Use it to describe your credentials, expertise, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to include based on your target audience.'}
            location="Vancouver, Canada"
            credibility={56}
            followers={72362}
            following={126}
            avatarUrl={'data:image/jpeg;base64,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'}
          />
          <Profile
            username="philiptrembley"
            aboutMe={'Use it to describe your credentials, expertise, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to include based on your target audience.'}
            location="Vancouver, Canada"
            credibility={56}
            followers={72362}
            following={126}
          />
          <Profile
            username="philiptrembley"
            aboutMe={'Use it to describe your credentials, expertise, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to include based on your target audience.'}
            location="Vancouver, Canada"
            credibility={56}
            followers={72362}
            following={126}
          />
          <Profile
            username="philiptrembley"
            aboutMe={'Use it to describe your credentials, expertise, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to include based on your target audience.'}
            location="Vancouver, Canada"
            credibility={56}
            followers={72362}
            following={126}
            avatarUrl={'https://i.pinimg.com/564x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg'}
          />
          <Profile
            username="jadenroth"
            location="Vancouver, Canada"
            credibility={5}
            followers={1}
            following={0}
            avatarUrl={'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'}
          />
          <Profile
            username="philiptrembley"
            aboutMe={'Use it to describe your credentials, expertise, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to include based on your target audience.'}
            location="Vancouver, Canada"
            credibility={56}
            followers={72362}
            following={126}
          />
          <Profile
            username="philiptrembley"
            aboutMe={'Use it to describe your credentials, expertise, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to include based on your target audience.'}
            location="Vancouver, Canada"
            credibility={56}
            followers={72362}
            following={126}
          />
          <Profile
            username="philiptrembley"
            aboutMe={'Use it to describe your credentials, expertise, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to include based on your target audience.'}
            location="Vancouver, Canada"
            credibility={56}
            followers={72362}
            following={126}
            avatarUrl={'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70'}
          />
          <Profile
            username="jadenroth"
            location="Vancouver, Canada"
            credibility={5}
            followers={1}
            following={0}
          />
          <Profile
            username="philiptrembley"
            aboutMe={'Use it to describe your credentials, expertise, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to include based on your target audience.'}
            location="Vancouver, Canada"
            credibility={56}
            followers={72362}
            following={126}
          /> */}
          <Post
            url="https://www.businessinsider.in/photo/75456938/This-AI-generates-absurdist-memes-that-are-funnier-than-what-most-real-humans-create.jpg?imgsize=241460"
            username="philiptrembley"
            createdTime={moment()}
            likes={89620}
            comments={5236}
          />
          <Post
            url="https://i.pinimg.com/originals/73/e8/a5/73e8a5d79222c7d9ea204ea2b603088a.jpg"
            username="philiptrembley"
            createdTime={moment()}
            likes={89620}
            comments={5236}
          />
          <Post
            url="https://static.businessworld.in/article/article_extra_large_image/1530772981_sqeqcy_Funny-marketing-meme-concept-470.jpg"
            username="philiptrembley"
            createdTime={moment()}
            likes={89620}
            comments={5236}
          />
        </div>
      </div>
    );
  }
};