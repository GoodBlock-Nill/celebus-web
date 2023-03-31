import React from 'react';
import { Container, Grid, Typography, Box, Link, IconButton, Button } from '@mui/material';
import styles from './AppFooter.module.css';
import appStore from '../../assets/image/AppStore.png';
import googleStore from '../../assets/image/GooglePlay.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4}>
            <Box className={styles.footerLeft}>
              {/* App Store download button */}
              <Link href="https://apps.apple.com/app/idYOUR_APP_ID" target="_blank" rel="noopener noreferrer">
                <Button>
                  <img src={appStore} alt="AppStore" className={styles.storeImg} />
                </Button>
              </Link>
              {/* Google Play download button */}
              <Link href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME" target="_blank" rel="noopener noreferrer">
                <Button>
                  <img src={googleStore} alt="GooglePlay" className={styles.storeImg} />
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography className={styles.footerCenter}>
              © 2023 Celebus, Inc. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className={styles.footerRight}>
              <Box className={styles.terms}>
                <Button className={styles.linkButton} href="/privacy-policy" target="_blank">
                    Privacy Policy
                </Button>
                <Button className={styles.linkButton} href="/privacy-policy" target="_blank">
                    Terms of service
                </Button>
              </Box>
              <Box className={styles.socialIcons}>
                {/* Twitter Link button */}
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <IconButton>
                    <TwitterIcon />
                  </IconButton>
                </Link>
                {/* Youtube Link button */}
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <IconButton>
                    <YouTubeIcon />
                  </IconButton>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default AppFooter;
