import React from 'react';
import { render } from 'react-dom';
import App from './App'
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';



const renderDom = Component => {
    render(
        <AppContainer>
        <Component />
        </AppContainer>,
        document.getElementById('app')
    );
}
renderDom(App);


if (module.hot) {
    module.hot.accept('./App', () => {
        const App = require('./App').default;
        renderDom(App);
    })
} 