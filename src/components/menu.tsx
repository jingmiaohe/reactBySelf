import React from 'react'
import { Menu } from 'antd';
// import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;

const Sider: React.FC = () => {
       let tsMenuArr = [
           {toPath: '/ts/base', title: '基础类型'},
           {toPath: '/ts/hard', title: '接口'},
           {toPath: '/ts/arr', title: '数组'},
           {toPath: '/ts/fun', title: '函数类型'},
           {toPath: '/ts/enum', title: '枚举'},
           {toPath: '/ts/clas', title: '类修饰符'},
           {toPath: '/ts/assert', title: '类型断言'},
           {toPath: '/ts/fan', title: '泛型'}
       ];
    let jsMenuArr = [
        {toPath: '/jsCore/memoryManagement', title: '内存管理'},
        {toPath: '/jsCore/unitTest', title: '代码质量'},
        {toPath: '/jsCore/codeReliable', title: '代码可靠性'},
        {toPath: '/jsCore/composePipe', title: 'compose pipe'}
    ];
        return (
            <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline">
                <SubMenu
                    key="sub1"
                    title="css">
                        <Menu.Item key="1">
                            <Link to='/css/reset'>resetCss</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/css/center'>居中</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to='/css/layout'>布局</Link>
                        </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title="vue2">
                        <Menu.Item key="6">
                            <Link to='/vue2/observeArr'>数组监听</Link>
                        </Menu.Item>
                        <Menu.Item key="7">依赖收集</Menu.Item>
                        <Menu.Item key="8">
                            <Link to='/vue2/mvvm'>简单的mvvm</Link>
                        </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title="ts">
                        {tsMenuArr.map((item,index)=>{
                            return (<Menu.Item key={'ts'+ index}>
                                <Link to={item.toPath}>{item.title}</Link>
                            </Menu.Item>)
                        })}
                </SubMenu>
                <SubMenu
                    key="sub4"
                    title="js进阶">
                    {jsMenuArr.map((item,index)=>{
                        return (<Menu.Item key={'js'+ index}>
                            <Link to={item.toPath}>{item.title}</Link>
                        </Menu.Item>)
                    })}
                </SubMenu>
            </Menu>
        );
    }
export default Sider