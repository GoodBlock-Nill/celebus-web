import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import iPhoneImage from '../../assets/image/screen7.png';
import styles from './Screen7.module.css';
import { Container } from '@mui/system';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import { Fade } from 'react-awesome-reveal';


const Screen7 = () => {
  const PulseAnimation = keyframes`${pulse}`;
  const ShinyBuyBadge = styled.div`
    animation: 1.3s ${PulseAnimation} infinite;
  `;

  return (
    <Box className={styles.screen7Container}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center" className={styles.screen7Contents} >
          <Grid item xs={12} md={6} lg={6}>
            <Fade direction="left"> 
              <Box className={styles.leftGroup}>
                  <img src={iPhoneImage} alt="iPhone" className={styles.iphoneImage} />
                  <ShinyBuyBadge className={styles.buyBadge}>
                    Buy
                  </ShinyBuyBadge>
                </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box className={styles.rightGroup}>
              <Box className={styles.collectBadge}>
                Collect
              </Box>
              <Typography variant="h2" fontWeight={700} className={styles.collectText}>
                Collect
              </Typography>
              <Typography variant="h2" fontWeight={700} className={styles.newClipsText}>
                new CLIPS
              </Typography>
              <Typography variant="h2" fontWeight={700} className={styles.onMarketText}>
                on the market!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Screen7;
