import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import './libs/normalize.css';
import './index.css';
import App from './App';
import localeData from './Assets/i18n/data.json';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

addLocaleData([...en, ...es]);

// Define user's language
const language = (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, fallback to locale without region code, fallback to en
const messages = localeData[language] || localeData[languageWithoutRegionCode] || localeData.en;

//Store
const store = createStore( reducer, applyMiddleware(thunk) )

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale={language} messages={messages}>
            <Router>
                <App locale={language}/>
            </Router>
        </IntlProvider>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
