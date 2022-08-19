import { Button, Col, Card, Row, Form, Input, Space } from 'antd';
import {
    FilePdfOutlined
} from '@ant-design/icons';

const { TextArea } = Input;

const Contact = () => {
    return (
        <div className='contact-container'>
            <Row gutter={[16,16]}>
                <Col lg={12} sm={24} xs={24} data-aos="fade-right">
                    <Card title="Contactformulier" bordered={false}>
                        <p>
                            Uw informatie wordt automatisch aangevuld door het systeem. Vult u alstublieft
                            het onderwerp en uw bericht in.
                        </p>
                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            autoComplete="off"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Form.Item
                                label="Naam"
                                name="naam"
                            >
                                <Input placeholder='De heer Demo Client' disabled />
                            </Form.Item>

                            <Form.Item
                                label="E-mail"
                                name="email"
                            >
                                <Input placeholder='info@ostrica.nl' disabled />
                            </Form.Item>

                            <Form.Item
                                label="Telefoon"
                                name="telefoon"
                            >
                                <Input placeholder='0205408300' disabled />
                            </Form.Item>

                            <Form.Item
                                label="Onderwerp"
                                name="onderwerp"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Bericht"
                                name="bericht"
                                rules={[{ required: true, message: 'Deze vraag is verplicht' }]}
                            >
                                <TextArea rows={4} placeholder='Schrijf uw bericht hier...' />
                            </Form.Item>

                            <Form.Item>
                                <Button size={'large'} block type="primary" htmlType="submit" className='green-background'>
                                    Verzenden
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col lg={12} sm={24} xs={24}>
                    <Row gutter={[16, 16]}>
                        <Col lg={12} xs={24} data-aos="fade-left">
                            <Card bordered={false}>
                                <Row>
                                    <Col span={6} className='self-center'>
                                        <FilePdfOutlined className='text-5xl primary-font' />
                                    </Col>
                                    <Col span={18}>
                                        <Space direction="vertical" size={0} className='flex'>
                                            <p className='text-xs m-1'>Bezoekadres</p>
                                            <p className='text-xs m-1'>Professor J.H. Bavincklaan 2</p>
                                            <p className='text-xs m-1'>1183 AT Amstelveen</p>
                                        </Space>
                                    </Col>
                                </Row>

                            </Card>
                        </Col>
                        <Col lg={12} xs={24} data-aos="fade-left">
                            <Card bordered={false}>
                                <Row>
                                    <Col span={6} className='self-center'>
                                        <FilePdfOutlined className='text-5xl primary-font' />
                                    </Col>
                                    <Col span={18}>
                                        <Space direction="vertical" size={0} className='flex'>
                                            <p className='text-xs m-1'>Telefoon</p>
                                            <p className='text-xs m-1'>020 - 540 83 00</p>
                                            <p className='text-xs m-1'>Ma t/m Vr : 8:30 - 17:30</p>
                                        </Space>
                                    </Col>
                                </Row>

                            </Card>
                        </Col>
                        <Col lg={12} xs={24} data-aos="fade-left">
                            <Card bordered={false}>
                                <Row>
                                    <Col span={6} className='self-center'>
                                        <FilePdfOutlined className='text-5xl primary-font' />
                                    </Col>
                                    <Col span={18}>
                                        <Space direction="vertical" size={0} className='flex'>
                                            <p className='text-xs m-1'>E-mailadres</p>
                                            <p className='text-xs m-1'>csd@ostrica.nl</p>
                                        </Space>
                                    </Col>
                                </Row>

                            </Card>
                        </Col>
                        <Col span={24} data-aos="fade-left">
                            <Card bordered={false}>
                                <Row>
                                    <Col lg={3} xs={6} className='self-center'>
                                        <FilePdfOutlined className='text-5xl primary-font' />
                                    </Col>
                                    <Col lg={21} xs={18}>
                                        <Space direction="vertical" size={0} className='flex'>
                                            <p className='text-xs m-1'>Routebeschrijving</p>
                                            <p className='text-xs m-1'>Google maps</p>
                                        </Space>
                                    </Col>
                                    <Col lg={24} className='mt-5'>
                                        <Button block className='primary-bg'>PDF Download</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;