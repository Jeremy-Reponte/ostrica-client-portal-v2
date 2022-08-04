import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Avatar, Modal, Badge, Button, Space, Card } from 'antd';
import type { MenuProps } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeFilled,
    NotificationFilled,
    PhoneFilled,
    PoweroffOutlined,
    LineChartOutlined,
    BarChartOutlined,
    FormOutlined,
    FilePdfFilled,
    KeyOutlined,
    MailOutlined,
    UserOutlined,
    ExclamationCircleOutlined,
    MessageFilled
} from '@ant-design/icons';
import { Link, Outlet, useNavigate, Navigate } from 'react-router-dom';
import '../styles/LayoutWrapper.scss';

const { Header, Content, Sider } = Layout;
const { confirm } = Modal;

const Logout = () => {
    confirm({
        title: 'Are you sure do you want to logout?',
        icon: <ExclamationCircleOutlined />,
        okText: 'Yes',
        cancelText: 'No',
        onOk() {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            window.location.href = '/login';
        },
        onCancel() {
            console.log('Cancel');
        },
    });
};

const items: MenuProps['items'] = [
    {
        label: (
            <Link to="/">
                Home
            </Link>
        ),
        key: 'home',
        icon: <HomeFilled />
    },
    {
        label: (
            <Link to="/portefeuille">
                Portefeuille
            </Link>
        ),
        key: 'portefeuille',
        icon: <LineChartOutlined />
    },
    {
        label: (
            <Link to="/rapportages">
                Rapportages
            </Link>
        ),
        key: 'rapportages',
        icon: <BarChartOutlined />
    },
    {
        label: (
            <Link to="/nieuws">
                Nieuws
            </Link>
        ),
        key: 'nieuws',
        icon: <NotificationFilled />
    },
    {
        label: (
            <Link to="/contact">
                Contact
            </Link>
        ),
        key: 'contact',
        icon: <PhoneFilled />
    },
    {
        label: 'Wijziging',
        key: 'wijziging',
        icon: <FormOutlined />,
        children: [
            {
                label: (
                    <Link to="/formulieren-wijziging">
                        Formulieren
                    </Link>
                ),
                key: 'formulieren',
                icon: <FilePdfFilled />
            },
            {
                label: (
                    <Link to="/wachtwoord-wijziging">
                        Wachtwoord
                    </Link>
                ),
                key: 'wachtwoord',
                icon: <KeyOutlined />
            },
            {
                label: (
                    <Link to="/email-wijziging">
                        Email
                    </Link>
                ),
                key: 'email',
                icon: <MailOutlined />
            }
        ]

    },
    {
        label: (
            <Link to="#" onClick={Logout}>
                Uitloggen
            </Link>
        ),
        key: 'uitloggen',
        icon: <PoweroffOutlined />
    }
];

const LayoutWrapper = () => {
    const navigate = useNavigate();

    const [current, setCurrent] = useState('home');
    const [collapsed, setCollapsed] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    useEffect(() => {
        if (localStorage.getItem('username') === null && localStorage.getItem('password') === null) {
            localStorage.setItem('username', '');
            localStorage.setItem('password', '');
            navigate('/login');
        } else if (localStorage.getItem('username') === '' && localStorage.getItem('password') === '') {
            navigate('/login');
        }
    }, [navigate])

    return (
        <>
            {localStorage.getItem('username') !== '' && localStorage.getItem('password') !== ''
                && localStorage.getItem('username') !== null && localStorage.getItem('password') !== null ?
                (
                    <Layout onClick={() => { if (isMenuActive) setIsMenuActive(false) }}>
                        <Layout className="site-layout">
                            <Header
                                className="site-header-background"
                                style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}
                            >
                                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: () => setCollapsed(!collapsed),
                                })}
                                <Row>
                                    <Col span={12}>
                                        <img src="../assets/ostrica-logo.png" width="100" height="40" alt="ostrica" className='site-logo' />
                                    </Col>
                                    <Col span={12}>
                                        <div className="action">
                                            <div className='site-avatar' onClick={() => setIsMenuActive(!isMenuActive)}>
                                                <Badge count={1}>
                                                    <Avatar className='secondary-background' icon={<UserOutlined />} />
                                                </Badge>
                                            </div>
                                            <Card className={isMenuActive ? "menu active" : "menu"}>
                                                <Space direction='vertical' size={5}>
                                                    <Link to="inbox">
                                                        <Button type="link" icon={<MessageFilled className='primary-font' />}>
                                                            <span className='primary-font'>Inbox</span>
                                                        </Button>
                                                    </Link>
                                                    <Button type="link" icon={<PoweroffOutlined className='primary-font' />} onClick={Logout}>
                                                        <span className='primary-font'>Uitloggen</span>
                                                    </Button>
                                                </Space>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </Header>
                        </Layout>
                        <Layout>
                            <Sider
                                className='main-side-nav'
                                trigger={null}
                                collapsible
                                collapsed={collapsed}
                            >
                                <Menu
                                    className='side-nav-menu'
                                    mode="inline"
                                    defaultSelectedKeys={[current]}
                                    items={items}
                                    onClick={onClick}
                                />
                            </Sider>
                            <Content
                                className={collapsed ? 'closed' : 'opened'}
                            >
                                <Row>
                                    <Col span={12}>
                                        <Breadcrumb style={{ margin: '16px 0' }}>
                                            <Breadcrumb.Item>Ostrica</Breadcrumb.Item>
                                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </Col>
                                    <Col span={12} className='self-center'>
                                        <div style={{ float: 'right', background: '#ff6a00', color: '#fff' }} className='p-1 pl-2 pr-2 rounded-lg'>299999</div>
                                    </Col>
                                </Row>
                                <div className="site-layout-background">
                                    <Outlet />
                                </div>
                            </Content>
                        </Layout>
                    </Layout >
                ) : <Navigate to='/login' />
            }
        </>
    );
};

export default LayoutWrapper;