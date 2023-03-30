import React, { useState, useEffect, useRef } from 'react';
import { Container } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import styles from './Screen4.module.css';
import { Box } from '@mui/system';
import { useIntl } from 'react-intl';

const Screen4 = () => {
  const intl = useIntl();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const node = ref.current;
      if (node) {
        const top = node.getBoundingClientRect().top;
        const isVisible = top >= 0 && top <= window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [ref]);

  return (
    <Box className={styles.screen4Container} ref={ref}>
      <Container maxWidth="lg">
        {isVisible && (
          <>
            <TypeAnimation
              sequence={[2000, intl.formatMessage({ id: 'screen4.is_there_anything_else' })]}
              speed={50}
              wrapper="span"
              cursor={true}
              className={styles.typeText1}
            />
            <TypeAnimation
              sequence={[4000, intl.formatMessage({ id: 'screen4.yes' })]}
              speed={100}
              wrapper="span"
              cursor={false}
              className={styles.typeText2}
            />
          </>
        )}
      </Container>
    </Box>
  );
};

export default Screen4;