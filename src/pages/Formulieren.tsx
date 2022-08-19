import { Button, Col, Card, Row, Typography, Space } from 'antd';
import {
    FilePdfOutlined,
    CloudDownloadOutlined
} from '@ant-design/icons';

const { Title } = Typography;

const Formulieren = () => {
    return (
        <div className='formulieren-container'>
            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24} data-aos="fade-right">
                    <Card bordered={false}>
                        <Row>
                            <Col span={3} className='self-center hidden lg:block'>
                                <FilePdfOutlined className='text-5xl primary-font' />
                            </Col>
                            <Col span={21} className='self-center'>
                                <Title level={4} className='m-1'>Adreswijziging</Title>
                            </Col>
                            <Col span={24} className='mt-5'>
                                <Button block className='primary-bg'>Download 0,18 MB</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col lg={12} xs={24} data-aos="fade-left">
                    <Card bordered={false}>
                        <Row>
                            <Col span={3} className='self-center hidden lg:block'>
                                <FilePdfOutlined className='text-5xl primary-font' />
                            </Col>
                            <Col span={21} className='self-center'>
                                <Title level={4} className='m-1'>Wijziging betaalrekening</Title>
                            </Col>
                            <Col span={24} className='mt-5'>
                                <Button block className='primary-bg'>Download 0,20 MB</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col
                    lg={12} xs={24}
                    className="animate__animated animate__fadeIn animate__slow"
                >
                    <Card bordered={false} hoverable>
                        <Row>
                            <Col span={6} className='self-center'>
                                <CloudDownloadOutlined className='text-6xl primary-font' />
                            </Col>
                            <Col span={18}>
                                <Space direction="vertical">
                                    <p className='m-1'>
                                        Heeft u de adobe reader al? Klik op
                                        de afbeelding naast de adobe reader te downloaden.
                                    </p>
                                    <Title level={4}>Click here to get ADOBE READER</Title>
                                </Space>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Formulieren;