import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const LoginWachtwoord: FC = () => {
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        localStorage.setItem('username', values.gebruikersnaam)
        localStorage.setItem('password', values.wachtwoord)
        navigate('/');
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className="unauth-background"></div>
            <div className='container col-12 unauth-content'>
                <Row className='animate__animated animate__fadeIn animate__slow'>
                    <Col offset={7} span={10}>
                        <Col span={24} className='mb-4'>
                            <div className="grid justify-items-stretch">
                                <div className="justify-self-center">
                                    <img src="../assets/ostrica-logo-2-white.png" width="200" alt="ostrica" className='site-logo' />
                                </div>
                            </div>
                        </Col>
                        <Card className='login-card'>
                            <Row>
                                <Col span={24} className='mb-5'>
                                    <div className="grid justify-items-stretch">
                                        <div className="justify-self-center">
                                            <Title level={4} className='primary-font font-bold'><UserOutlined /> WACHTWOORD OPVRAGEN</Title>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} className='mb-5'>
                                    <Card bordered={false} className='skyblue-background'>
                                        <Title level={5} className='p-0 m-0'>
                                            Vul hier uw gebruikersnaam en emailadres in om uw wachtwoord opnieuw in te stellen.
                                        </Title>
                                    </Card>
                                </Col>
                            </Row>

                            <Form
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                layout='vertical'
                                className='login-form'
                            >
                                <Form.Item className='input-headers'>
                                    <Row>
                                        <Col span={24}>
                                            <Title level={5}>Vul hier uw gebruikersnaam in</Title>
                                        </Col>
                                    </Row>
                                </Form.Item>
                                <Form.Item
                                    name="gebruikersnaam"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input className='login-inputs' placeholder='Gebruikersnaam' />
                                </Form.Item>

                                <Form.Item className='input-headers'>
                                    <Row>
                                        <Col span={24}>
                                            <Title level={5}>Vul hier uw (bij ons bekende) e-mailadres in</Title>
                                        </Col>
                                    </Row>
                                </Form.Item>
                                <Form.Item
                                    name="wachtwoord"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input className='login-inputs' placeholder='e-mailadres' />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        className='secondary-background'
                                        block
                                        type="primary"
                                        htmlType="submit"
                                        size={'large'}
                                    >
                                        Verzenden
                                    </Button>
                                </Form.Item>

                                <Form.Item className='input-headers'>
                                    <Row className='mt-3'>
                                        <Col span={24}>
                                            <Link to={"/login"}>
                                                <Title level={5} className='secondary-font text-center'>
                                                    <span className='primary-font'>Terug naar</span><span className='link'> Inloggen</span>
                                                </Title>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Form.Item>
                            </Form>
                        </Card>
                        <p className='text-white text-center mt-4'>© Copyright 2022. All Rights Reserved.</p>
                    </Col>
                </Row>
            </div>
        </>
    );
}