/*
 * @Description:
 * @Author: Fenghua Zhang
 * @Date: 2021-03-15 14:37:24
 * @LastEditTime: 2021-03-15 15:08:28
 * @LastEditors: Fenghua Zhang
 */
interface ComponentsItem {
    path: string,
    component: any
}
// 自动处理路由
const files = require.context('./pages', true, /\.tsx$/)
// 声明组件对象
const Components: Array<ComponentsItem> = [];
// 遍历需要转成导航栏的页面views
files.keys().forEach((item) => {
    let url = item.slice(1).toLowerCase().split('.')[0]
    if (/list/.test(url) || url.includes('index')) {
        const component = files(item).default
        const path = '/' + (url.split('/')[1] === 'home' ? '' : url.split('/')[1]);
        Components.push(
            {
                path,
                component
            }
        )
    }
})

export default Components;