import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import TranslationEN from './locales/en.json';
import TranslationJA from './locales/ja.json';
import TranslationKO from './locales/ko.json';
import TranslationZH from './locales/zh.json';
import styles from './App.module.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AppHeader from './components/AppHeader/AppHeader';
import Screen1 from './components/Screens/Screen1';
import Screen2 from './components/Screens/Screen2';
import Screen3 from './components/Screens/Screen3';
import Screen4 from './components/Screens/Screen4';
import Screen5 from './components/Screens/Screen5';
import Screen6 from './components/Screens/Screen6';
import Screen7 from './components/Screens/Screen7';
import Screen8 from './components/Screens/Screen8';
import Screen9 from './components/Screens/Screen9';
import AppFooter from './components/AppFooter/AppFooter';

const messages = {
  en: TranslationEN,
  ja: TranslationJA,
  ko: TranslationKO,
  zh: TranslationZH,
};

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans', sans-serif",
  },
});

function App() {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader locale={locale} setLocale={setLocale} />
        <div className={styles.app}>
          <Screen1 />
          <Screen2 />
          <Screen3 />
          <Screen4 />
          <Screen5 />
          <Screen6 />
          <Screen7 />
          <Screen8 />
          <Screen9 />
        </div>
        <AppFooter />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
