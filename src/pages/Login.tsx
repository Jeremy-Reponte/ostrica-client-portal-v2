import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Col, Form, Input, Modal, Row, Tabs, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const { Title } = Typography;
const { TabPane } = Tabs;



const Login = () => {
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);

    const onFinish = (values: any) => {
        console.log('Success:', values);
        localStorage.setItem('username', values.gebruikersnaam)
        localStorage.setItem('password', values.wachtwoord)
        navigate('/');
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <>
            <div className="unauth-background"></div>
            <div className="grid place-content-center h-screen unauth-content px-5 lg:px-0 animate__animated animate__fadeIn animate__slow">
                <div className="grid justify-items-stretch mb-5 pt-[130px] lg:pt-0">
                    <div className="justify-self-center">
                        <img src="../assets/ostrica-logo-white.png" width="200" alt="ostrica" className='site-logo' />
                    </div>
                </div>
                <Card className="rounded-lg py-5 lg:py-16">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="place-content-center lg:w-[30rem] px-5">
                            <Row>
                                <Col span={24} className='mb-5'>
                                    <div className="grid justify-items-stretch">
                                        <div className="justify-self-center">
                                            <Title level={2} className='primary-font font-bold'><UserOutlined /> CLIËNT INLOG</Title>
                                        </div>
                                    </div>
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
                                        <Col span={12}>
                                            <Title level={5}>Gebruikersnaam</Title>
                                        </Col>
                                        <Col span={12}>
                                            <Link to={"/login-gebruikersnaam-vergeten"}>
                                                <Title level={5} className='text-right secondary-font'>
                                                    <span className='link'>Gebruikersnaam vergeten?</span>
                                                </Title>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Form.Item>
                                <Form.Item
                                    name="gebruikersnaam"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input className='login-inputs' />
                                </Form.Item>

                                <Form.Item className='input-headers'>
                                    <Row>
                                        <Col span={12}>
                                            <Title level={5}>Wachtwoord</Title>
                                        </Col>
                                        <Col span={12}>
                                            <Link to={"/login-wachtwoord-vergeten"}>
                                                <Title level={5} className='text-right secondary-font'>
                                                    <span className='link'>Wachtwoord vergeten?</span>
                                                </Title>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Form.Item>
                                <Form.Item
                                    name="wachtwoord"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password className='login-inputs' />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        className='secondary-background'
                                        block
                                        type="primary"
                                        htmlType="submit"
                                        size={'large'}
                                    >
                                        Login
                                    </Button>
                                </Form.Item>

                                <Form.Item className='input-headers'>
                                    <Row className='mt-3'>
                                        <Col span={24}>
                                            <Link to={"#"} onClick={() => setModalVisible(true)}>
                                                <Title level={5} className='secondary-font text-center'>
                                                    <span className='link'>Wilt u geld bijstorten?</span>
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
                    <div className="justify-self-center">
                        <a href='https://tinyurl.com/2tmp7t32' target="_blank" rel="noreferrer">
                            <Button className='ostrica-color-4-background' >
                                BinckBank <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-3' />
                            </Button>
                        </a>
                    </div>
                    <hr className='hr-divider' />
                    <p className='text-white text-center'>© Copyright 2022. All Rights Reserved.</p>
                </div>
            </div>
            <Modal
                title="Wilt u geld bijstorten?"
                centered
                visible={modalVisible}
                cancelText="Sluiten"
                zIndex={1000}
                closable={false}
                footer={[
                    <Button key="back" onClick={handleCancel} className='secondary-background'>
                        <span className="text-white">Sluiten</span>
                    </Button>,
                ]}
            >
                <p>
                    Als u een beleggingsrekening bij ons heeft en u wilt geld bijstorten dan is dat op elk gewenst moment mogelijk.
                    U kunt uw geld overmaken naar de depotbank waar uw portefeuille in bewaring is.
                    Onderstaand vindt u stortingsinstructies per depotbank:
                </p>
                <Tabs onChange={onChange} type="card">
                    <TabPane tab="BinckBank" key="1">
                        <Title level={5}>Heeft u een rekening bij BinckBank?</Title>
                        <p>
                            Gelieve uw bank opdracht te geven het te beleggen bedrag over te boeken naar uw eigen
                            IBAN-nummer bij BinckBank onder vermelding van uw zescijferig effectenrekeningnummer en uw naam.
                        </p>
                        <p>
                            Mocht u uw IBAN- nummer nier (meer) weten, neem dan contact op met onze ClientServiceDesk (csd@ostrica.nl).
                        </p>
                        <p>Indien hier door uw bank naar gevraagd wordt, kunt u de BIC-code: <b>BINKNL21</b> vermelden.</p>
                        <p>
                            <b>Belangrijke informatie:</b> Omdat het IBAN-nummer gerelateerd is aan uw effectenrekeningnummer, zal
                            uw bank automatisch melden dat dit IBAN-nummer niet in combinatie met uw naam herkend wordt. Het is
                            <b> correct</b> dat u deze melding krijgt, echter als u het bovenstaande IBAN-nummer heeft ingevoerd, kunt u
                            deze melding <b>negeren</b> en uw betaalopdracht voltooien.
                        </p>
                    </TabPane>
                    <TabPane tab="IQ-EQ Trust" key="2">
                        <Title level={5}>Heeft u een rekening bij IQ-EQ Trust?</Title>
                        <p>
                            U kunt geld overmaken naar het IBAN nummer van IQ-EQ Trust onder vermelding van uw zescijferig
                            effectenrekeningnummer en uw naam.
                        </p>
                        <Title level={5}>IBAN</Title>
                        <p>NL89 ABNA 0 876084528</p>
                        <Title level={5}>BIC nummer</Title>
                        <p>ABNANL2A</p>
                        <p>
                            <b>Let op:</b> Overboekingen naar IQ-EQ Trust wordt eenmaal per maand verwerkt. Heeft u een rekening
                            bij IQ-EQ Trust dan dient uw storting uiterlijk op de 12e van de maand te zijn ontvangen om nog
                            in de desbetreffende maand belegd te kunnen worden. Stortingen die binnenkomen na de 12e van de
                            maand worden in de opvolgende maand belegd.
                        </p>
                    </TabPane>
                </Tabs>
            </Modal>
        </>
    );
}

export default Login;