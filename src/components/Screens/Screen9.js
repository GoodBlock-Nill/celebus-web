// Screen9.js
import React from 'react';
import { Container, Grid, Box, Typography, Link } from '@mui/material';
import styles from './Screen9.module.css';
import { Fade } from 'react-awesome-reveal';
import iphoneImage from '../../assets/image/screen9.png';
import s9Logo from '../../assets/image/screen9Logo.png';
import appleStore from '../../assets/image/AppStore2.png';
import googleStore from '../../assets/image/GooglePlay2.png';
import { FormattedMessage } from 'react-intl';


const Screen9 = () => {
  return (
    <Box className={styles.screen9Container}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          {/* Left group: Start Now text and app download buttons */}
          <Grid item xs={12} md={8}>
            <Box className={styles.leftGroup}>
              <Typography variant="h2" className={styles.startNowText} color='white' fontWeight={700}>
                <FormattedMessage id="screen9.startNow" defaultMessage="Start Now!" />
              </Typography>
              <Box className={styles.downloadButtons}>
                {/* App Store download button */}
                <Link className={styles.btnLink} href="https://apps.apple.com/app/idYOUR_APP_ID" target="_blank" rel="noopener noreferrer">
                  <img src={appleStore} alt="AppStore" />    
                </Link>
                {/* Google Play download button */}
                <Link className={styles.btnLink} href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME" target="_blank" rel="noopener noreferrer">
                  <img src={googleStore} alt="GooglePlay" />
                </Link>
              </Box>
            </Box>
          </Grid>
          {/* Right group: iPhone image with rotating logo */}
          <Grid item xs={12} md={4}>
           <Fade direction="down">
            <Box className={styles.rightGroup}>
              <img src={iphoneImage} alt="iPhone" className={styles.iphoneImage} />
              <img src={s9Logo} alt="Logo" className={`${styles.s9logo} ${styles.imageFloating}`} />
            </Box>
           </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Screen9;
