// @flow

import 'normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root: HTMLDivElement = document.getElementById('root');
if (root) {
    ReactDOM.render(<App />, root);
}
