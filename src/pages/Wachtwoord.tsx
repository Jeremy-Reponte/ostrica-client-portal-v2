import { FC } from 'react';
import { Button, Col, Card, Row, Form, Input, Space } from 'antd';
import {
    ExclamationCircleFilled,
    KeyOutlined
} from '@ant-design/icons';

export const Wachtwoord: FC = () => {
    return (
        <div className='wachtwoord-container'>
            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24} data-aos="fade-right">
                    <Card title="Vul hier uw nieuwe wachtwoord in" bordered={false}>
                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            autoComplete="off"
                            labelCol={{ span: 7 }}
                            labelWrap
                            wrapperCol={{ span: 24 }}
                        >
                            <Form.Item
                                label="Huidig wachtwoord"
                                name="huidig-wachtwoord"
                            >
                                <Input.Password placeholder='*****' />
                            </Form.Item>

                            <Form.Item
                                label="Nieuw wachtwoord"
                                name="nieuw-wachtwoord"
                            >
                                <Input.Password placeholder='*****' />
                            </Form.Item>

                            <Form.Item
                                label="Herhaal wachtwoord"
                                name="herhaal-wachtwoord"
                            >
                                <Input.Password placeholder='*****' />
                            </Form.Item>

                            <Form.Item>
                                <Button size={'large'} block type="primary" htmlType="submit" className='green-background'>
                                    Toepassen
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col lg={12} xs={24} data-aos="fade-left">
                    <Row gutter={24}>
                        <Col span={24} className='mb-4'>
                            <Card bordered={false}>
                                <Row>
                                    <Col span={4} className='self-center hidden lg:block'>
                                        <ExclamationCircleFilled className='text-6xl primary-font' />
                                    </Col>
                                    <Col span={20}>
                                        <Space direction="vertical" size={0} className='flex'>
                                            <p className='text-lg m-0'>	Let op!</p>
                                            <p className='text-lg m-0'>Gebruik een wachtwoord van minimaal 8 tekens met letters, cijfers en symbolen.</p>
                                        </Space>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={24}>
                            <Card bordered={false} data-aos="fade-left">
                                <Row>
                                    <Col span={4} className='self-center hidden lg:block'>
                                        <KeyOutlined className='text-6xl primary-font' />
                                    </Col>
                                    <Col span={20}>
                                        <Space direction="vertical" size={0} className='flex'>
                                            <p className='text-lg m-0'>Wachtwoord</p>
                                            <p className='text-lg m-0'>Het nieuwe wachtwoord mag niet gelijk zijn aan het oude wachtwoord.</p>
                                        </Space>
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