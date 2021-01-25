/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2020-12-04 15:54:21
 * @LastEditTime: 2021-01-25 15:49:44
 * @LastEditors: Fenghua Zhang
 */
import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';


function App() {

    return (
        <div className="App">
            <Button>按钮</Button>
            <Button btnType={ButtonType.Primary}>按钮2</Button>
            <Button btnType={ButtonType.Primary} disabled size={ButtonSize.Large}>按钮2</Button>
            <Button btnType={ButtonType.Link} href="https://wwww.baidu.com">我是百度</Button>

        </div>
    );
}

export default App;
