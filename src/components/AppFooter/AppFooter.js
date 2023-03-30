import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import styles from './AppFooter.module.css';

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4}>
            <Box className={styles.footerLeft}>
              <a href="#" className={styles.appStoreButton}>
                <img src="/path/to/app-store-icon.png" alt="App Store" />
              </a>
              <a href="#" className={styles.googlePlayButton}>
                <img src="/path/to/google-play-icon.png" alt="Google Play" />
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography className={styles.footerCenter}>
              © 2023 Celebus, Inc. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className={styles.footerRight}>
              <a href="/privacy-policy" className={styles.linkButton}>
                Privacy Policy
              </a>
              <a href="/terms-of-service" className={styles.linkButton}>
                Terms of Service
              </a>
              <Box className={styles.socialIcons}>
                <a href="#" className={styles.socialButton}>
                  <img src="/path/to/twitter-icon.png" alt="Twitter" />
                </a>
                <a href="#" className={styles.socialButton}>
                  <img src="/path/to/youtube-icon.png" alt="YouTube" />
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default AppFooter;
