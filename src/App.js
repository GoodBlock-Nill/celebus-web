import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { IntlProvider } from 'react-intl';
import PaginationButton from './components/PaginationButton/PaginationButton';
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
import Screen8 from './components/Screens/Screen8';
import Screen9 from './components/Screens/Screen9';

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
  const [locale, setLocale] = useState('ko');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locale]);

  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);


  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        if (slideIndex < 5) {
          setSlideIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        if (slideIndex > 0) {
          setSlideIndex((prevIndex) => prevIndex - 1);
        }
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [slideIndex]);

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    swipeToSlide: true,
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader locale={locale} setLocale={setLocale} />
        <div className={styles.app}>
          <Slider
            ref={sliderRef}
            {...sliderSettings}
            initialSlide={slideIndex}
            afterChange={(current) => setSlideIndex(current)}
          >
            <Screen1 />
            <Screen2 />
            <Screen3 />
            <Screen8 />
            <Screen9 />
          </Slider>
          <PaginationButton
            direction="prev"
            onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
          />
          <PaginationButton
            totalSlides={5}
            activeSlide={slideIndex}
            onClick={(index) => sliderRef.current && sliderRef.current.slickGoTo(index)}
          />
        </div>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
