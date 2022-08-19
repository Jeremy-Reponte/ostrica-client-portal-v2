import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Layout, Menu, Breadcrumb, Row, Col, Avatar, Modal, Badge, Button, Space, Card, Drawer, BackTop, Collapse, Popover, Tooltip } from 'antd';
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
import { Link, Outlet, useNavigate, Navigate, NavLink } from 'react-router-dom';


const { Header, Content, Sider } = Layout;
const { confirm } = Modal;
const { Panel } = Collapse;

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
            <NavLink key="home" to="/">
                Home
            </NavLink>
        ),
        key: 'home',
        icon: <HomeFilled />
    },
    {
        label: (
            <NavLink key="portefeuille" to="/portefeuille">
                Portefeuille
            </NavLink>
        ),
        key: 'portefeuille',
        icon: <LineChartOutlined />
    },
    {
        label: (
            <NavLink to="/rapportages">
                Rapportages
            </NavLink>
        ),
        key: 'rapportages',
        icon: <BarChartOutlined />
    },
    {
        label: (
            <NavLink to="/nieuws">
                Nieuws
            </NavLink>
        ),
        key: 'nieuws',
        icon: <NotificationFilled />
    },
    {
        label: (
            <NavLink to="/contact">
                Contact
            </NavLink>
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
                    <NavLink to="/formulieren-wijziging">
                        Formulieren
                    </NavLink>
                ),
                key: 'formulieren',
                icon: <FilePdfFilled />
            },
            {
                label: (
                    <NavLink to="/wachtwoord-wijziging">
                        Wachtwoord
                    </NavLink>
                ),
                key: 'wachtwoord',
                icon: <KeyOutlined />
            },
            {
                label: (
                    <NavLink to="/email-wijziging">
                        Email
                    </NavLink>
                ),
                key: 'email',
                icon: <MailOutlined />
            }
        ]

    },
    {
        label: (
            <NavLink to="#" onClick={Logout}>
                Uitloggen
            </NavLink>
        ),
        key: 'uitloggen',
        icon: <PoweroffOutlined />
    }
];

const ProtectedRoutes = [
    {
        key: "home",
        label: "Home",
        path: "/",
        hidden: false,
        icon: <HomeFilled />,
        isFunction: false,
        isChild: false
    },
    {
        key: "portefeuille",
        label: "Portefeuille",
        path: "/portefeuille",
        hidden: false,
        icon: <LineChartOutlined />,
        isFunction: false,
        isChild: false
    },
    {
        key: "rapportages",
        label: "Rapportages",
        path: "/rapportages",
        hidden: false,
        icon: <BarChartOutlined />,
        isFunction: false,
        isChild: false
    },
    {
        key: "nieuws",
        label: "Nieuws",
        path: "/nieuws",
        hidden: false,
        icon: <NotificationFilled />,
        isFunction: false,
        isChild: false
    },
    {
        key: "contact",
        label: "Contact",
        path: "/contact",
        hidden: false,
        icon: <PhoneFilled />,
        isFunction: false,
        isChild: false
    },
    {
        key: "formulieren",
        label: "Formulieren",
        path: "/formulieren-wijziging",
        hidden: false,
        icon: <FilePdfFilled />,
        isFunction: false,
        isChild: true
    },
    {
        key: "wachtwoord",
        label: "Wachtwoord",
        path: "/wachtwoord-wijziging",
        hidden: false,
        icon: <KeyOutlined />,
        isFunction: false,
        isChild: true
    },
    {
        key: "email",
        label: "Email",
        path: "/email-wijziging",
        hidden: false,
        icon: <MailOutlined />,
        isFunction: false,
        isChild: true
    },
    {
        key: "uitloggen",
        label: "Uitloggen",
        path: "#",
        hidden: false,
        icon: <PoweroffOutlined />,
        isFunction: true,
        isChild: false
    }
];

const LayoutWrapper = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState('home');
    const [collapsedNav, setCollapsedNav] = useState(false);
    const [collapsedDrawer, setCollapsedDrawer] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 769px)' })

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const onClose = () => {
        setCollapsedDrawer(false);
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

    function WijzigingNav() {
        if (collapsedNav) {
            return (
                <Space direction='vertical' size={'small'}>
                    {ProtectedRoutes.map((item) => (
                        <React.Fragment key={item.key}>
                            {!item.hidden && (
                                !item.isFunction && item.isChild && (
                                    <NavLink key={item.key} to={item.path}
                                        className="side-nav-menu-collapse side-nav-menu">
                                        <Space size={"middle"}>
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </Space>
                                    </NavLink>
                                )
                            )}
                        </React.Fragment>
                    ))}
                </Space>
            )
        }
        return (
            <>
                {ProtectedRoutes.map((item) => (
                    <React.Fragment key={item.key}>
                        {!item.hidden && (
                            !item.isFunction && item.isChild && (
                                <NavLink key={item.key} to={item.path}
                                    className="side-nav-menu">
                                    <Space size={"middle"}>
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </Space>
                                </NavLink>
                            )
                        )}
                    </React.Fragment>
                ))}
            </>
        )
    };

    function ProtectedNavigatoin() {
        return (
            <>
                {ProtectedRoutes.map(({ key, label, path, hidden, icon, isFunction, isChild }) => (
                    <React.Fragment key={key}>
                        {!hidden && (
                            !isFunction && !isChild && (
                                <Tooltip placement="right" title={label} overlayStyle={!collapsedNav ? { display: "none" } : {}}>
                                    <NavLink key={key} to={path}
                                        onClick={() => setCollapsedDrawer(false)}
                                        className={collapsedNav ? "side-nav-menu-collapse side-nav-menu" : "side-nav-menu"}>
                                        <Space size={"middle"}>
                                            {icon}
                                            {!collapsedNav && <span>{label}</span>}
                                        </Space>
                                    </NavLink>
                                </Tooltip>
                            )
                        )}
                    </React.Fragment>
                ))}
                <Collapse expandIconPosition='end' className='collapse-ghost-navigation'>
                    {!collapsedNav ?
                        <Panel header={(
                            <Space size={"middle"}>
                                <FormOutlined />
                                <span>Wijziging</span>
                            </Space>
                        )} key="1">
                            <WijzigingNav />
                        </Panel>
                        :
                        <Panel header={(
                            <Popover content={<WijzigingNav />} placement="rightTop" className='nav-popup'>
                                <div className="side-nav-menu-collapse cursor-pointer" onClick={() => setCollapsedDrawer(false)}>
                                    <Space size={"middle"}>
                                        <FormOutlined />
                                    </Space>
                                </div>
                            </Popover>
                        )} key="2" showArrow={false} />
                    }
                </Collapse>
                {ProtectedRoutes.map(({ key, label, hidden, icon, isFunction }) => (
                    <React.Fragment key={key}>
                        {!hidden && (
                            isFunction && (
                                <Tooltip placement="right" title={label} overlayStyle={!collapsedNav ? { display: "none" } : {}}>
                                    <div
                                        className={collapsedNav ? "side-nav-menu-collapse side-nav-menu cursor-pointer" : "side-nav-menu cursor-pointer"}
                                        onClick={Logout}>
                                        <Space size={"middle"}>
                                            {icon}
                                            {!collapsedNav && <span>{label}</span>}
                                        </Space>
                                    </div>
                                </Tooltip>
                            )
                        )}
                    </React.Fragment>
                ))}
            </>
        )
    }

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
                                {React.createElement(collapsedNav || collapsedDrawer ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: () => isDesktopOrLaptop ? setCollapsedNav(!collapsedNav) : setCollapsedDrawer(!collapsedDrawer),
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
                                collapsed={collapsedNav}
                            >
                                <ProtectedNavigatoin />
                            </Sider>
                            <Drawer
                                className='main-side-drawer'
                                placement="left"
                                onClose={onClose}
                                visible={collapsedDrawer}
                                closable={false}
                                width="250px"
                                key="key"
                            >
                                <ProtectedNavigatoin />
                            </Drawer>
                            <Content
                                className={collapsedNav || collapsedDrawer ? 'closed' : 'opened'}
                            >
                                <Row>
                                    <Col span={12}>
                                        <Breadcrumb style={{ margin: '16px 0' }}>
                                            <Breadcrumb.Item>Ostrica</Breadcrumb.Item>
                                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </Col>
                                    <Col span={12} className='self-center'>
                                        <div className='rounded-lg user-id'>299999</div>
                                    </Col>
                                </Row>
                                <div className="site-layout-background">
                                    <BackTop />
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