import React, { useEffect, useRef, useState } from 'react';

import { connect } from 'react-redux';
import { selectNightmareEnabled } from '../state/NightmareSlice';



const mapStateToProps = (state) => {
  return {
    nightmareEnabled: selectNightmareEnabled(state),
  };
};

class VideoSpawner extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.videoElement = null;  // Store the video element reference

  }


  componentDidMount() {
    document.addEventListener('click', this.spawnVideo);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.spawnVideo);
    this.videoElement && this.videoElement.remove();  // Remove the video if it exists
  }

  spawnVideo = () => {

    
    const { nightmareEnabled } = this.props;
    console.log(nightmareEnabled)

    if (nightmareEnabled) {
      const video = document.createElement('video');
      video.src = process.env.PUBLIC_URL + this.props.videoSrc;  // Use PUBLIC_URL to get the correct path
      video.autoplay = true;
      video.loop = true;
      video.className = 'video';
      video.style.position = 'absolute';
      video.style.width = '200px';
      video.style.height = 'auto';
      video.style.left = `${Math.random() * window.innerWidth - 200}px`;
      video.style.top = `${Math.random() * window.innerHeight - 200}px`;
      video.style.pointerEvents = 'none';
      document.addEventListener('click', () => {
        video.remove();
        console.log('haaha');
      })
      this.videoRef.current.appendChild(video);
      video.play().catch(error => console.error('Video playback failed:', error));
      this.videoElement = video;
    }
  };

  render() {
    return <div ref={this.videoRef}></div>;
  }
}

export default connect(mapStateToProps)(VideoSpawner);