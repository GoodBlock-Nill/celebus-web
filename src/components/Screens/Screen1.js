import React, { useEffect, useRef, useState } from 'react';
import videoSrc from '../../assets/videos/screen1.mp4';
import styles from './Screen1.module.css';
import { IconButton } from '@mui/material';
import { VolumeOff, VolumeUp } from '@mui/icons-material';

const Screen1 = () => {
  const videoRef = useRef(null);
  const [isButtonPressed, ] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const video = videoRef.current;
      const windowAspectRatio = window.innerWidth / window.innerHeight;
      const videoAspectRatio = video.videoWidth / video.videoHeight;

      if (windowAspectRatio > videoAspectRatio) {
        video.style.width = '100wh';
        video.style.height = 'auto';
      } else {
        video.style.width = 'auto';
        video.style.height = '100vh';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handleResize once on mount to properly size the video

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMuteClick = () => {
    const video = videoRef.current;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className={`${styles.screen} ${styles.screen1Container}`}>
      <video
        ref={videoRef}
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        onLoadedMetadata={(event) => {
          event.target.style.opacity = 1;
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>
      <IconButton
        className={`${styles.volumeButton} ${
          isButtonPressed ? styles.pressed : ''
        }`}
        onClick={handleMuteClick}
      >
        {isMuted ? <VolumeOff /> : <VolumeUp />}
      </IconButton>
    </div>
  );
};

export default Screen1;
