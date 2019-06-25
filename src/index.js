import React from 'react'
import ReactDom from 'react-dom'

import './index.css';

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './components/App';

const store = configureStore();

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);