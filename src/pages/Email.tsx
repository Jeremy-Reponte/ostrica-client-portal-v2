import { FC } from 'react';
import { Button, Col, Card, Row, Form, Input, Space } from 'antd';
import {
    MailFilled,
    CheckCircleFilled,
    FlagFilled
} from '@ant-design/icons';

export const Email: FC = () => {
    return (
        <div className='email-container'>
            <Row>
                <Col span={12} className='pr-2' data-aos="fade-right">
                    <Card title="Vul hier uw nieuwe emailadres in" bordered={false}>
                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            autoComplete="off"
                            labelCol={{ span: 7 }}
                            labelWrap
                            wrapperCol={{ span: 24 }}
                        >
                            <Form.Item
                                label="Huidig e-mailadres"
                                name="huidig-e-mailadres"
                            >
                                <Input defaultValue={'charls.vinasoy@ostrica.nl'} disabled />
                            </Form.Item>

                            <Form.Item
                                label="Nieuw e-mailadres"
                                name="nieuw-e-mailadres"
                            >
                                <Input placeholder='eg.:email@email.com' />
                            </Form.Item>

                            <Form.Item
                                label="Herhaal nieuw e-mailadres"
                                name="herhaal-nieuw e-mailadres"
                            >
                                <Input placeholder='eg.:email@email.com' />
                            </Form.Item>

                            <Form.Item>
                                <Button size={'large'} block type="primary" htmlType="submit" className='green-background'>
                                    Toepassen
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={12} className='pl-2'>
                    <Row gutter={24}>
                        <Col span={24} className='mb-4' data-aos="fade-left">
                            <Card bordered={false}>
                                <Row>
                                    <Col span={4} className='self-center'>
                                        <MailFilled className='text-5xl primary-font' />
                                    </Col>
                                    <Col span={20}>
                                        <Space direction="vertical" size={0} className="flex">
                                            <p className='text-xs m-0'>	Let op!</p>
                                            <p className='text-xs m-0'>Gebruik een wachtwoord van minimaal 8 tekens met letters, cijfers en symbolen.</p>
                                        </Space>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={24} className='mb-4' data-aos="fade-left">
                            <Card bordered={false}>
                                <Row>
                                    <Col span={4} className='self-center'>
                                        <CheckCircleFilled className='text-5xl primary-font' />
                                    </Col>
                                    <Col span={20}>
                                        <Space direction="vertical" size={0} className="flex">
                                            <p className='text-xs m-0'>Wachtwoord</p>
                                            <p className='text-xs m-0'>Het nieuwe wachtwoord mag niet gelijk zijn aan het oude wachtwoord.</p>
                                        </Space>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={24} data-aos="fade-left">
                            <Card bordered={false}>
                                <Row>
                                    <Col span={4} className='self-center'>
                                        <FlagFilled className='text-5xl primary-font' />
                                    </Col>
                                    <Col span={20}>
                                        <Space direction="vertical" size={0} className="flex">
                                            <p className='text-xs m-0'>Wachtwoord</p>
                                            <p className='text-xs m-0'>Het nieuwe wachtwoord mag niet gelijk zijn aan het oude wachtwoord.</p>
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