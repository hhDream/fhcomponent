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

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    return <Route
        render={(location) => {
            localStorage.isLogin ? (<LayoutMaster>{children}</LayoutMaster>) : (
                <Redirect
                    to={
                        {
                            pathname: "/login",
                            state: { from: location }
                        }
                    }
                >

                </Redirect>
            )
        }}
    ></Route>
}

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/home">
                    <Home />
                </PrivateRoute>
                <PrivateRoute path="/buttonPage">
                    <ButtonPage />
                </PrivateRoute>
                <Route path="/" >
                    <Login></Login>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
