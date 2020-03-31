import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, useHistory, BrowserRouter } from 'react-router-dom';
import store from './store';
import LoginPage from 'pages/LoginPage';
import NewProgram from '@components/new-program/NewProgram';
// import './index.sass';
import 'bulma';

const App = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/" component={NewProgram} />
                <Route path="*">
                    <p>404</p>
                </Route>
            </Switch>
        </main>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
