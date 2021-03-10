/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2020-12-04 15:54:21
 * @LastEditTime: 2021-03-04 16:48:30
 * @LastEditors: Fenghua Zhang
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, RouteProps } from 'react-router-dom';
import './styles/index.scss'
import Home from './pages/home';
import ButtonPage from './pages/buttonPage';
import LayoutMaster from './layouts/LayoutMaster';
import Login from './pages/login/login';
import authContext from './stores/auth.store';
import { useContext } from 'react';
import { observer } from 'mobx-react';
const PrivateRoute: React.FC<RouteProps> = observer(({ children, ...rest }) => {
    const auth = useContext(authContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.isLogined ? (
                    <LayoutMaster>{children}</LayoutMaster>
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )}
        />
    );
});

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/">
                    <Home />
                </PrivateRoute>
                <PrivateRoute path="/buttonPage">
                    <ButtonPage />
                </PrivateRoute>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;