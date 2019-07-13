import React, { Component } from 'react';
import reducers from '../reducers';

class SongList extends Component {
  console.log(reducers.songs);
  
  render() {
    return (
      <div>
        Song List
      </div>
    );
  }
}

export default SongList;
