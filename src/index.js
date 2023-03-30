import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import messages_en from './locales/en.json'; // import messages for English
import messages_ko from './locales/ko.json'; // import messages for Korean
import messages_ja from './locales/ja.json'; // import messages for Japanese
import messages_zh from './locales/zh.json'; // import messages for Chinese

const messages = {
  en: messages_en,
  ko: messages_ko,
  ja: messages_ja,
  zh: messages_zh,
}; // define an object with all the messages

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider messages={messages[navigator.language] || messages.en} defaultLocale="en" locale={navigator.language}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </IntlProvider>
  </React.StrictMode>,
);

reportWebVitals();
