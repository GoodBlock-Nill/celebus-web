import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Grid, Typography, IconButton, Box } from '@mui/material';
import styles from './Screen5.module.css';
import textBadge from '../../assets/image/badgeEnd.png';
import rightBadge from '../../assets/image/screen5Badge.png';
import missionImage1 from '../../assets/image/screen5-1.png';
import missionImage2 from '../../assets/image/screen5-2.png';
import { Fade } from 'react-awesome-reveal';

const Screen5 = () => {
  const [showMission1, setShowMission1] = useState(true);
  const [pulseMission1, setPulseMission1] = useState(true);
  const [rotateMission1, setRotateMission1] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPulseMission1(false);
      setRotateMission1(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (rotateMission1) {
      const timer = setTimeout(() => {
        setShowMission1(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [rotateMission1]);
  
  return (
    <Box className={styles.screen5Container}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center" spacing={3}>
          <Grid item xs={12} md={8} className={styles.leftGroup}>
            <Box className={styles.leftGroup}>
              <Box className={styles.missionBadge}>
                <FormattedMessage id="screen5.mission" defaultMessage="Mission" />
              </Box>
              <Box className={styles.plainText}>
                <Box className={styles.textGroup} >
                  <Typography fontWeight={700} className={styles.text1}>
                    <FormattedMessage id="screen5.earn" defaultMessage="Earn" />
                  </Typography>
                  <Typography fontWeight={700} className={styles.text2}>
                    <FormattedMessage id="screen5.badges" defaultMessage="Badges" />
                  </Typography>
                </Box>
                <Box className={styles.textGroup} >
                  <Typography fontWeight={700} className={styles.text1}>
                    <FormattedMessage id="screen5.byCompleting" defaultMessage="by completing" />
                  </Typography>
                  <Typography fontWeight={700} className={styles.text2}>
                    <FormattedMessage id="screen5.missions" defaultMessage="Missions!" />
                  </Typography>
                </Box>
                <Box className={styles.textGroup} >
                  <Typography fontWeight={700} className={styles.text1}>
                    <FormattedMessage id="screen5.plus" defaultMessage="Plus" />                  
                  </Typography>
                  <Typography fontWeight={700} className={styles.text2}>
                    <FormattedMessage id="screen5.coolEvents" defaultMessage="cool events" />
                    <img src={textBadge} alt="Mission Badge" className={styles.eventsImage} />
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className={styles.rightGroup}>
            <Box className={styles.rightGroup}>
              <Fade direction='right'>
                <Box className={styles.imageContainer}>
                  {showMission1 ? (
                    <>
                      <img src={missionImage1} alt="Mission" className={styles.image} />
                      <IconButton
                        color="black"
                        size="large"
                        sx={{
                          position: 'absolute',
                          top: '45%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 2,
                        }}
                      >
                        <img
                          src={rightBadge}
                          alt="Go to Mission"
                          className={`${styles.rightBadge} ${pulseMission1 ? styles.pulseRightBadge : ''} ${rotateMission1 ? styles.rotateRightBadge : ''}`}
                        />
                      </IconButton>
                    </>
                  ) : (
                    <img
                      src={missionImage2}
                      alt="Mission 2"
                      className={`${styles.image} ${styles.imageFloating}`}
                      style={{
                        opacity: 0,
                        transition: 'opacity 3s',
                      }}
                      onLoad={(e) => {
                        e.target.style.opacity = 1;
                      }}
                    />
                  )}
                </Box>
              </Fade>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Screen5;
