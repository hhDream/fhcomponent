/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2021-03-04 15:49:57
 * @LastEditTime: 2021-03-15 13:45:42
 * @LastEditors: Fenghua Zhang
 */
import React from 'react';
import Button, { ButtonType, ButtonSize } from '../../components/Button/button';


const ButtonPage: React.FC = () => {
    const goPage = () => {

    };
    return (<div>
        <Button onClick={goPage} btnType={ButtonType.Primary} size={ButtonSize.Large}>我的按钮</Button>
        <a href="/home">home页面</a>
    </div>)
}

export default ButtonPage;