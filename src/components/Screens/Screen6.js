import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Screen6.module.css';
import iPhoneImage1 from '../../assets/image/screen6-1.png';
import iPhoneImage2 from '../../assets/image/screen6-2.png';
import Clip1 from '../../assets/image/clip1.png';
import Clip2 from '../../assets/image/clip2.png';
import Clip3 from '../../assets/image/clip3.png';


const Screen6 = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: '20px', // Adjust this value to change the spacing between the slides
  };
  
  return (
    <Box className={styles.screen6Container}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center" spacing={3}>
          <Grid item xs={12} md={6} lg={8} className={styles.leftGroup}>
              <Box className={styles.leftGroup}>
                <Fade direction="left">
                  <Box className={styles.marketBadge}>
                    <span>Market</span>
                  </Box>
                </Fade>
                <Fade direction="left" delay={200}>
                  <span className={styles.text1}>Ticket turned into</span>
                  <span className={styles.text1}>
                    awesome {''}
                    <span className={styles.text2}>Digital contents!</span>
                  </span>
                </Fade>
                <Fade direction="left" delay={400}>
                  <div className={styles.iphoneImage}>
                    <img src={iPhoneImage1} alt="Digital contents" />
                    <div className={styles.sliderContainer}>
                      <Slider {...sliderSettings}>
                        <div>
                          <img src={Clip1} alt="Clip 1" className={styles.clipImage} />
                        </div>
                        <div>
                          <img src={Clip2} alt="Clip 2" className={styles.clipImage} />
                        </div>
                        <div>
                          <img src={Clip3} alt="Clip 3" className={styles.clipImage} />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </Fade>
              </Box>
            </Grid>
          <Grid item xs={12} md={6} lg={4} className={styles.rightGroup}>
            <Box className={styles.rightGroup}>
              <Fade direction="right" delay={600}>
                <img src={iPhoneImage2} alt="trading clip" className={styles.iphoneImage} />
              </Fade>
              <Fade direction="right" delay={800}>
                <span className={styles.text2}>Trade your CLIP</span>
                <span className={styles.text1}>with others</span>
              </Fade>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Screen6;
