import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Typography, Container, Box, IconButton, Grid } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import iPhoneImage2Alt from '../../assets/image/clipvideo1.gif';
import styles from './Screen3.module.css';
import PlayButton from '../../assets/image/PlayButton.png';

const Screen3 = () => {

  return (
    <Box className={`${styles.screen3Container} screen`}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between" className={styles.screen3Content}>
          <Grid item xs={12} md={6} lg={6}>
            <Box className={styles.imageGroup} >
              <Box className={styles.screen3Image}>
                <Fade direction="down">
                  <img src={iPhoneImage2Alt} alt="iPhone Alt" />
                </Fade>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box className={styles.screen3Text}>
              <Typography variant="h2" component="h2" gutterBottom className={styles.s3Text1}>
                <FormattedMessage id="screen3.checkout" defaultMessage="Check out Your" />
              </Typography>
              <Typography variant="h2" component="h2" gutterBottom className={styles.s3Text2}>
                <FormattedMessage id="screen3.digitalgoods" defaultMessage="Digital goods" />
              </Typography>
              <Typography variant="h2" component="h2" gutterBottom className={styles.s3Text3}>
                <FormattedMessage id="screen3.on" defaultMessage="On " />
                <IconButton className={styles.playBtnWrapper}>
                  <img src={PlayButton} alt="PlayButton" className={styles.playBtn} />
                </IconButton>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Screen3;
