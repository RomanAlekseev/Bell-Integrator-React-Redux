import * as React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/LoginPage';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { store } from './store/configureStore';
import AppRouter from './routers/AppRouter';

ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
