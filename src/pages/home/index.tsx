/*
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-04 16:33:26
 * @LastEditTime: 2021-03-11 11:29:44
 * @LastEditors: Fenghua Zhang
 */
import React from 'react';
import authContext from '../../stores/auth.store';
import { useContext } from 'react';
import "./home.scss";
import { Link } from 'react-router-dom';
const Home: React.FC = () => {

    const auth = useContext(authContext)

    return (<div className="homePage">
        我是home
        <Link to="/buttonPage">
            buttonPage
        </Link>
        <input type="text" value={auth.isLogined.toString()} />
    </div>)

}

export default Home
