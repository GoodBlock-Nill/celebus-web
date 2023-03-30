import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import iPhoneImage from '../../assets/image/screen8-1.png';
import iPhoneImage2 from '../../assets/image/screen8-2.png';
import MessageCard from '../../assets/image/screen8Card.png';
import styles from './Screen8.module.css';
import { Fade } from 'react-awesome-reveal';


const Screen8 = () => {
  return (
    <Box className={styles.screen8Container}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6} lg={6}>
            <Box className={styles.leftGroup}>
              <Box className={styles.giftBadge}>
                Gift
              </Box>
              <Typography variant="h2" fontWeight="700" className={styles.text}>
                How about this <span>Gift</span> idea?
              </Typography>
              <Fade direction="right">
                <Box className={styles.imageGroup}>
                  <img src={iPhoneImage} alt="iPhone" className={styles.iphoneImage} />
                  <img src={MessageCard} alt="Message Card" className={`${styles.messageCard} ${styles.imageFloating}`}/>
                </Box>
              </Fade>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box className={styles.rightGroup}>
              <img src={iPhoneImage2} alt="iPhone 2" className={styles.iphoneImage2} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Screen8;
