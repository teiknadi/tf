import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import registerServiceWorker from './registerServiceWorker';
import phrases from './i18n/en.json';

import App from './App';
import I18nProvider from './i18n/Provider';
import { ParallaxProvider } from 'react-scroll-parallax';

WebFont.load({
  google: {
    families: ['Helvetica']
  },
  custom: {
    families: ['DIN Pro Condensed'],
    urls: ['/fonts/style.css']
  }
});

ReactDOM.render(
  <ParallaxProvider>
    <I18nProvider phrases={phrases}>
      <App/>
    </I18nProvider>
  </ParallaxProvider>
  , document.getElementById('root'));
registerServiceWorker();
