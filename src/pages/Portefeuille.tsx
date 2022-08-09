import { FC } from 'react';
import {
    Button,
    Card,
    Col,
    Row,
    Collapse,
    Divider,
} from 'antd';
import {
    CaretRightOutlined,
    FilePdfOutlined
} from '@ant-design/icons';
import DummyChart1 from '../components/Charts/DummyChart1';
import DummyTable1 from '../components/Tables/DummyTable1';
import ChartLegendsTable from '../components/Tables/ChartLegendsTable';

const { Panel } = Collapse;

export const Portefeuille: FC = () => {
    return (
        <div className='portefeuille-container'>
            <Row gutter={16}>
                <Col lg={12} sm={24} xs={24}>
                    <Row gutter={[16, 16]}>
                        <Col span={24} data-aos="fade-down">
                            <Collapse
                                bordered={false}
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                className="site-collapse-custom-collapse"
                            >
                                <Panel header="Datum 18-jul-2022 " key="1" className="site-collapse-custom-panel">
                                    <ChartLegendsTable />
                                </Panel>
                            </Collapse>
                        </Col>
                        <Col span={24} data-aos="fade-up">
                            <Card bordered={false}>
                                <Row>
                                    <Col span={4} className='self-center'>
                                        <FilePdfOutlined className='font-size-50 primary-font' />
                                    </Col>
                                    <Col span={20} className='self-center'>
                                        <Row>
                                            <Col span={12}>
                                                <h3>Print View (PDF Versie)</h3>
                                            </Col>
                                            <Col span={12}>
                                                <div className="grid justify-items-stretch">
                                                    <Button type="primary" className='green-background justify-self-end'>Download</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={24} data-aos="fade-up">
                            <Card title="Cliënt Portefeuille" bordered={false}>
                                <Row>
                                    <Col span={12}>
                                        <h3>Profiel</h3>
                                    </Col>
                                    <Col span={12}>
                                        <div className="grid justify-items-stretch">
                                            <h3>Ostrica Ondernemend Profiel</h3>
                                        </div>
                                    </Col>
                                </Row>
                                <Divider />
                                <Row>
                                    <Col span={12}>
                                        <h3>Totaal effecten</h3>
                                    </Col>
                                    <Col span={12}>
                                        <div className="grid justify-items-stretch">
                                            <h3>€ 3.413.909,69</h3>
                                        </div>
                                    </Col>
                                </Row>
                                <Divider />
                                <Row>
                                    <Col span={12}>
                                        <h3>Kasgelden</h3>
                                    </Col>
                                    <Col span={12}>
                                        <div className="grid justify-items-stretch">
                                            <h3>€ -823.956,91</h3>
                                        </div>
                                    </Col>
                                </Row>
                                <Divider />
                                <Row>
                                    <Col span={12}>
                                        <h3>Opgelopen Rente</h3>
                                    </Col>
                                    <Col span={12}>
                                        <div className="grid justify-items-stretch">
                                            <h3>€ 0,00</h3>
                                        </div>
                                    </Col>
                                </Row>
                                <Divider />
                                <Row>
                                    <Col span={12}>
                                        <h3>Vermogen</h3>
                                    </Col>
                                    <Col span={12}>
                                        <div className="grid justify-items-stretch">
                                            <h3>€ 2.589.952,78</h3>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={24} data-aos="fade-up">
                            <Card title="Asset Allocatie" bordered={false}>
                                <DummyChart1 />
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg={12} sm={24} xs={24} data-aos="fade-left">
                    <Row gutter={[16, 16]}>
                        <Col span={24} >
                            <Card title="Portefeuille Details" bordered={false}>
                                <DummyTable1 />
                            </Card>
                        </Col>
                        <Col span={24} data-aos="fade-left">
                            <Card title="Maandoverzicht" bordered={false}>
                                <DummyTable1 />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
