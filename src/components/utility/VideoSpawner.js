import React, { useEffect, useRef } from 'react';

class VideoSpawner extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.spawnVideo);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.spawnVideo);
  }

  spawnVideo = () => {
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
    video.addEventListener('click', () => {
      video.remove();
    })
    this.videoRef.current.appendChild(video);
    video.play().catch(error => console.error('Video playback failed:', error));
  };

  render() {
    return <div ref={this.videoRef}></div>;
  }
}

export default VideoSpawner;