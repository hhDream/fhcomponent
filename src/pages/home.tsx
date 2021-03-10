/*
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-04 16:33:26
 * @LastEditTime: 2021-03-04 16:48:05
 * @LastEditors: Fenghua Zhang
 */
import React from 'react';
import authContext from './../stores/auth.store';
import { useContext } from 'react';

const Home: React.FC = () => {

    const auth = useContext(authContext)
    return (<div>
        我是home
        <a href='/buttonPage'>buttonPage</a >
        <input type="text" value={auth.isLogined.toString()} />
    </div>)

}

export default Home
