import 'normalize.css/normalize.css';
import alive from 'images/alive.jpg';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(<App title="It's alive!" logo={alive} />, root);
}
