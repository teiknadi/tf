import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
    google: {
        families: ['Helvetica']
    },
    custom: {
        families: ['DIN Pro Condensed'],
        urls: ['/fonts/style.css']
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
