import React from 'react';
import './index.scss';

export default class CreatePost extends React.Component {
  render() {
    return (
      <div className="create-container">
        {/* <div className="caption-container">
          <input placeholder="Add some caption" autoFocus={true}/>
        </div> */}

        <div className="genre-label">
          <p>Choose you genre</p>
        </div>
        <div className="genre-container">
          <table>
            <tr>
              <td>
                <input type="radio" value="creepypasta" name="genre"/>
                <label htmlFor="creepypasta">Creepypasta</label>
              </td>
              <td>
                <input type="radio" value="music" name="genre"/>
                <label htmlFor="music">Music</label>
              </td>
            </tr>

            <tr>
              <td>
                <input type="radio" value="political" name="genre"/>
                <label htmlFor="political">Polictical</label>
              </td>
              <td>
                <input type="radio" value="vg" name="genre"/>
                <label htmlFor="vg">Video Game</label> 
              </td>
            </tr>
          </table>
        </div>
        <div className="submit-btn">
          <button>Post</button>
        </div>
      </div>
    )
  };
};