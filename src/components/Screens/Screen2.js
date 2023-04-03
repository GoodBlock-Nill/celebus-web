import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Typography, Container, Box, Grid } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import styles from './Screen2.module.css';
import iPhoneImage from '../../assets/image/screen2.png';

const Screen2 = () => {
  return (
    <Box className={styles.screen2Container}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between" className={styles.screen2Content}>
          <Grid item xs={12} md={6}>
            <Box className={styles.screen2Text}>
              <Typography gutterBottom className={styles.text1}>
                <FormattedMessage id="screen2.scanYour" defaultMessage="Scan your" />
                <span className={styles.text2}>
                  <FormattedMessage id="screen2.qr" defaultMessage="QR" />
                </span>
              </Typography>
              <Typography className={styles.text1}>
                <FormattedMessage id="screen2.getYour" defaultMessage="Get your" />
                <span className={styles.text2}>
                  <FormattedMessage id="screen2.digitalGoods" defaultMessage="Digital goods" />
                </span>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={styles.screen2Image}>
              <Fade direction="up">
                <img src={iPhoneImage} alt="iPhone" />
              </Fade>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Screen2;
