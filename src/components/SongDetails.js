import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ selectedSong }) => {
  if (!selectedSong) return null;
  
  return (
    <div>
      <p>Title: {selectedSong.title}</p>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
