import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  useMediaQuery,
  MenuItem,
  Select,
  Link,
  Container,
  Drawer,
  List,
  ListItem,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.png';
import apple from '../../assets/image/AppStore.png';
import google from '../../assets/image/GooglePlay.png';
import styles from './AppHeader.module.css';
import { useIntl } from 'react-intl';

const AppHeader = ({ locale, setLocale }) => {
  const intl = useIntl();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setLocale(lang);
  };

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderButtonsAndLanguageSelector = () => (
    <Box sx={{ display: 'flex', gap: '16px' }}>
      <Link href="https://apps.apple.com/app/idYOUR_APP_ID" target="_blank" rel="noopener noreferrer">
      <Button color="inherit" className={styles.appdownloadBtn}>
          <img src={apple} alt="AppStore" />
        </Button>
      </Link>
      <Link href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME" target="_blank" rel="noopener noreferrer">
        <Button color="inherit" className={styles.appdownloadBtn}>
          <img src={google} alt="GooglePlay" />
        </Button>
      </Link>
      <Box
        className="language-select"
        sx={{
          marginLeft: '1rem',
          color: 'inherit',
          height: '32px',
          borderRadius: '22px',
          overflow: 'hidden',
        }}
      >
        <Select
          value={locale}
          onChange={handleLanguageChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Language selection' }}
          sx={{
            borderRadius: '22px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <MenuItem value="en">{intl.formatMessage({ id: 'header.english' })}</MenuItem>
          <MenuItem value="ko">{intl.formatMessage({ id: 'header.korean' })}</MenuItem>
          <MenuItem value="ja">{intl.formatMessage({ id: 'header.japanese' })}</MenuItem>
          <MenuItem value="zh">{intl.formatMessage({ id: 'header.chinese' })}</MenuItem>
        </Select>
      </Box>
    </Box>
  );

  return (
    <AppBar
    position="fixed"
    className={`${styles.appHeader}`}
    sx={{
      backgroundColor: scrolled ? 'white' : 'transparent',
      display: scrolled ? 'flex' : 'none',
      transition: 'background-color 0.3s',
      boxShadow: 'none'
    }}
    >  
      <Container maxWidth="lg" disableGutters>
        <Toolbar className={`${styles.toolbar} ${styles.toolbarContent}`} sx={{ alignItems: 'center' }}>
          <img src={logo} alt="Celebus Logo" className={styles.appTitle} />
          {isMobile ? (
            <>
              <IconButton edge="end" color="black" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List>
                  <ListItem>
                    <Link href="https://apps.apple.com/app/idYOUR_APP_ID" target="_blank" rel="noopener noreferrer">
                      <Button color="inherit" className={styles.appdownloadBtn}>
                        <img src={apple} alt="AppStore" />
                      </Button>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME" target="_blank" rel="noopener noreferrer">
                      <Button color="inherit" className={styles.appdownloadBtn}>
                        <img src={google} alt="GooglePlay" />
                      </Button>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Box className={styles.languageSelect}>
                      <Select
                        value={locale}
                        onChange={handleLanguageChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Language selection' }}
                        sx={{
                          borderRadius: '22px',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <MenuItem value="en">{intl.formatMessage({ id: 'header.english' })}</MenuItem>
                        <MenuItem value="ko">{intl.formatMessage({ id: 'header.korean' })}</MenuItem>
                        <MenuItem value="ja">{intl.formatMessage({ id: 'header.japanese' })}</MenuItem>
                        <MenuItem value="zh">{intl.formatMessage({ id: 'header.chinese' })}</MenuItem>
                      </Select>
                    </Box>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            renderButtonsAndLanguageSelector()
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;