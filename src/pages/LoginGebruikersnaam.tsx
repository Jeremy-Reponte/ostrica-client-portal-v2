import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

const LoginGebruikersnaam = () => {
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
            <div className="grid place-content-center h-screen unauth-content px-5 lg:px-0 animate__animated animate__fadeIn animate__slow">
                <div className="grid justify-items-stretch mb-5 pt-[130px] lg:pt-0">
                    <div className="justify-self-center">
                        <img src="../assets/ostrica-logo-2-white.png" width="200" alt="ostrica" className='site-logo' />
                    </div>
                </div>
                <Card className="rounded-lg py-5 lg:py-16">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="place-content-center lg:w-[30rem] px-5">
                            <Row>
                                <Col span={24} className='mb-5'>
                                    <div className="grid justify-items-stretch">
                                        <div className="justify-self-center">
                                            <Title level={4} className='primary-font font-bold'><UserOutlined /> GEBRUIKERSNAAM OPVRAGEN</Title>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} className='mb-5'>
                                    <Card bordered={false} className='skyblue-background'>
                                        <Title level={5} className='p-0 m-0'>
                                            Om uw gebruikersnaam te achterhalen hebben wij uw relatienummer
                                            en uw bij ons bekende emailadres nodig.
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
                                <Form.Item
                                    name="gebruikersnaam"
                                    rules={[{ required: true, message: 'Please input your relatienummer!' }]}
                                >
                                    <Input className='login-inputs' placeholder='Relatienummer #' />
                                </Form.Item>

                                <Form.Item
                                    name="wachtwoord"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input className='login-inputs' placeholder='Email' />
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
                        </div>
                    </div>
                </Card>
                <div className="grid justify-items-stretch mt-5 pb-10 lg:pb-0">
                    <p className='text-white text-center mt-4'>?? Copyright 2022. All Rights Reserved.</p>
                </div>
            </div>
        </>
    );
}

export default LoginGebruikersnaam;