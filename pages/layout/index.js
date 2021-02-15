import React from 'react'
import { Menu, Button, Switch, Radio } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    Icon,
    RocketTwoTone
} from '@ant-design/icons';
import './index.less'
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {Link} from 'react-router-dom'

moment.locale('en');


const { SubMenu } = Menu;

class layout extends React.Component {
    state = {
        collapsed: false,
        theme: 'light',
        locale: enUS
    };

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };

    // 隐藏导航栏
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    // 切换语言
    changeLocale = e => {
        const localeValue = e.target.value;
        this.setState({ locale: localeValue });
        if (!localeValue) {
            moment.locale('en');
        } else {
            moment.locale('zh-cn');
        }
    };

    render() {
        const { collapsed, locale } = this.state
        const { components } = this.props
        return (
            <div className='home_container'>
                <nav>
                    <div className='title'>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#iconplatform-color"></use>
                        </svg>
                        {!collapsed && <span>
                            Management
                        </span>}
                    </div>

                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme={this.state.theme}
                        inlineCollapsed={this.state.collapsed}
                    >
                        <SubMenu key="sub1" className='sub_items' icon={<RocketTwoTone className='nav_icon' />} title="Permission">
                            <Menu.Item key="users">
                                <Link to='/users'>Users</Link>
                            </Menu.Item>
                        </SubMenu>
                        {/* <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </SubMenu> */}
                    </Menu>
                </nav>

                <main>

                    <header>

                        <div>
                            <Button type="primary" onClick={this.toggleCollapsed} >
                                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                            </Button>

                        </div>

                        <div className='header_right_area'>
                            <div className="change-locale">
                                <Radio.Group value={locale} onChange={this.changeLocale}>
                                    <Radio.Button key="en" value={enUS}>
                                        English
                                  </Radio.Button>
                                    <Radio.Button key="cn" value={zhCN}>
                                        中文
                                 </Radio.Button>
                                </Radio.Group>
                            </div>

                            <Switch
                                checked={this.state.theme === 'dark'}
                                onChange={this.changeTheme}
                                checkedChildren="Dark"
                                unCheckedChildren="Light"
                            />
                        </div>

                    </header>

                    <div className='content'>
                        <div className='content_layout'>
                            {components}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}


export default layout