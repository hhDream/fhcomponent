/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2020-12-04 15:54:21
 * @LastEditTime: 2021-03-15 16:01:52
 * @LastEditors: Fenghua Zhang
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, RouteProps } from 'react-router-dom';
import './styles/index.scss'
import LayoutMaster from './layouts/LayoutMaster';
import Login from './pages/login';
import authContext from './stores/auth.store';
import { useContext } from 'react';
import { observer } from 'mobx-react';
import Components from './autoRouter';
const PrivateRoute: React.FC<RouteProps> = observer(({ component: Component, ...rest }) => {
    const auth = useContext(authContext);

    return (
        <Route
            {...rest}
            render={(routeProps) =>
                auth.isLogined ? (
                    <LayoutMaster><Component {...routeProps} /></LayoutMaster>
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: routeProps.location }
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
                {Components.map((item) => {
                    let d;
                    if (!item.path.includes('login')) {
                        d = <PrivateRoute exact key={item.path} path={item.path} component={item.component} />
                    } else {
                        d = <Route path="/login">
                            <Login />
                        </Route>
                    }
                    return d;
                })}

            </Switch>
        </Router>
    );
};

export default App;