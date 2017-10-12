import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/APP'

let store = createStore(todoApp)
store.subscribe(() =>
    console.log(store.getState())
);

window.onload = function () {
    var oView = document.getElementsByTagName('blue-view')[0];
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        oView
    );
};
