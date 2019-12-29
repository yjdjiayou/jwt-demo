import 'bootstrap/dist/css/bootstrap.css'
import React, {Componnet} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './containers/App';
import {ConnectedRouter} from 'react-router-redux';
import history from './history';


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>, document.querySelector('#root')
);