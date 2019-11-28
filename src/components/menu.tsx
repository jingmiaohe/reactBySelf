import React from 'react'
import { Menu, Icon } from 'antd';
// import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;

const Sider: React.FC = () => {
        return (
            <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline">
                <SubMenu
                    key="sub1"
                    title={
                        <span>
              <Icon type="mail" />
              <span>目录</span>
            </span>
                    }
                >
                    <Menu.ItemGroup key="g1" title="css">
                        <Menu.Item key="1">
                            <Link to='/css/reset'>resetCss</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/css/center'>居中</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to='/css/layout'>布局</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="js进阶">
                        <Menu.Item key="4">Option 3</Menu.Item>
                        <Menu.Item key="5">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g3" title="vue">
                        <Menu.Item key="6">
                            <Link to='/vue2/observeArr'>数组监听</Link>
                        </Menu.Item>
                        <Menu.Item key="7">mvvm</Menu.Item>
                        <Menu.Item key="7">依赖收集</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g4" title="underscore">
                        <Menu.Item key="8">Option 3</Menu.Item>
                        <Menu.Item key="9">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g5" title="模块化">
                        <Menu.Item key="10">Option 3</Menu.Item>
                        <Menu.Item key="11">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>
        );
    }
export default Sider