/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2020-12-04 15:54:21
 * @LastEditTime: 2021-02-20 16:40:31
 * @LastEditors: Fenghua Zhang
 */
import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import './styles/index.scss'

function App(this: any) {
    const handleClick = (e) => {
        console.log(e.target)
    }
    return (
        <div className="App">
            <Button>按钮</Button>
            <Button onClick={() => { handleClick }} btnType={ButtonType.Primary}>按钮2</Button>
            <Button btnType={ButtonType.Primary} disabled size={ButtonSize.Large}>按钮2</Button>
            <Button btnType={ButtonType.Link} href="https://wwww.baidu.com">我是百度</Button>
        </div>
    );
}

export default App;
