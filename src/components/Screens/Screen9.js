import React from 'react';
import { Container, Grid, Box, Typography, IconButton, Link } from '@mui/material';
import styles from './Screen9.module.css';
import iphoneImage from '../../assets/image/screen9.png';
import s9Logo from '../../assets/image/screen9Logo.png';
import appleStore from '../../assets/image/AppStore2.png';
import googleStore from '../../assets/image/GooglePlay2.png';

const Screen9 = () => {
  return (
    <Box className={styles.screen9Container}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box className={styles.leftGroup}>
              <Typography variant="h2" className={styles.startNowText} color='white' fontWeight={700}>
                Start Now!
              </Typography>
              <Box className={styles.downloadButtons}>
                {/* Replace the '#' in the href attribute with the appropriate app store links */}
                <Link href="https://apps.apple.com/app/idYOUR_APP_ID" target="_blank" rel="noopener noreferrer">
                  <IconButton>
                    <img src={appleStore} alt="AppStore" />
                  </IconButton>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME" target="_blank" rel="noopener noreferrer">
                  <IconButton>
                    <img src={googleStore} alt="GooglePlay" />
                  </IconButton>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={styles.rightGroup}>
              <img src={iphoneImage} alt="iPhone" className={styles.iphoneImage} />
              <img src={s9Logo} alt="Logo" className={styles.s9logo} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Screen9;
