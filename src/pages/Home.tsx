import { FC } from 'react';
import {
    Button,
    Card,
    Col,
    Row,
    Space,
    Tabs,
    Form,
    Select,
    Collapse,
    Divider,
    Typography,
    Alert
} from 'antd';
import {
    InfoCircleOutlined,
    EuroCircleFilled,
    CaretRightOutlined,
    GlobalOutlined,
    FilePdfOutlined
} from '@ant-design/icons';
import DummyChart1 from '../components/Charts/DummyChart1';
import DummyChart2 from '../components/Charts/DummyChart2';
import DummyChart3 from '../components/Charts/DummyChart3';
import DummyChart4 from '../components/Charts/DummyChart4';
import DummyTable1 from '../components/Tables/DummyTable1';
import DummyTable2 from '../components/Tables/DummyTable2';
import ChartLegendsTable from '../components/Tables/ChartLegendsTable';

const { TabPane } = Tabs;
const { Option } = Select;
const { Panel } = Collapse;
const { Title } = Typography;

export const Home: FC = () => {
    return (
        <div className='home-container'>
            <Row gutter={16}>
                <Col lg={12} sm={24} xs={24}>
                    <Row gutter={[16, 16]}>
                        <Col span={24} data-aos="fade-up">
                            <Card bordered={false} className='skyblue-background'>
                                <h5>2e kwartaalrapportage staat klaar!</h5>
                                <p>
                                    Het is halverwege het jaar en de wereld lijkt in
                                    brand te staan. Het voorzichtige optimisme dat nog
                                    zichtbaar was in het eerste kwartaal, heeft plaatsgemaakt
                                    voor brandjes blussen als nieuwe strategie van veel bedrijven.
                                    Echter kun je een trap oplopen of aflopen. Wij kiezen ervoor om
                                    met een positieve blik vooruit te kijken en de treden naar boven
                                    te bewandelen. In dit tweede kwartaalrapport kunt u lezen dat wij
                                    het zowel met onze aandelenfondsen als obligatiefondsen beter hebben
                                    gedaan dan vergelijkbare fondsen. Veel leesplezier! Mocht u vragen
                                    hebben dan horen wij dit graag.
                                </p>
                                <Space>
                                    <Button>Download PDF</Button>
                                    <Button>meer actueel nieuws</Button>
                                </Space>
                            </Card>
                        </Col>
                        <Col span={24} data-aos="fade-up">
                            <Card bordered={false}>
                                <Row>
                                    <Col span={6} className='self-center'>
                                        <InfoCircleOutlined className='font-size-100 primary-font' />
                                    </Col>
                                    <Col span={18}>
                                        <h5>Welkom op onze vernieuwde persoonlijke omgeving</h5>
                                        <p>
                                            U bevindt zich in het afgeschermde deel van de Ostrica website.
                                            Hier kunt u uw rekening(en) raadplegen en de waarde van uw portefeuille
                                            bekijken. De dagelijkse update van uw portal vindt plaats tussen
                                            11.00-12.00 uur. Heeft u vragen, opmerkingen of verbetersuggesties?
                                            Neem dan contact met ons op.
                                        </p>
                                    </Col>
                                </Row>

                            </Card>
                        </Col>
                        <Col span={24} data-aos="fade-up">
                            <Card bordered={false}>
                                <Row>
                                    <Col span={6} className='self-center'>
                                        <EuroCircleFilled className='font-orange font-size-100' />
                                    </Col>
                                    <Col span={18}>
                                        <h3>Uw vermogen</h3>
                                        <p>2.624.072 per 13 Jul 2022</p>
                                        <div className="grid justify-items-stretch">
                                            <Button type="primary" className='green-background justify-self-end'>Ga naar mijn Portefeuille</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={24}>
                            <Collapse
                                bordered={false}
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                className="site-collapse-custom-collapse"
                            >
                                <Panel header="Hulpmiddelen voor grafische informatie" key="1" className="site-collapse-custom-panel">
                                    <ChartLegendsTable />
                                </Panel>
                            </Collapse>
                        </Col>
                        <Col span={24}>
                            <Card bordered={false}>
                                <Tabs type="card" data-aos="fade-up">
                                    <TabPane tab="Vermogensontwikkeling historie en verwachting" key="1">
                                        <Row>
                                            <Col span={24}>
                                                <div className="grid justify-items-stretch">
                                                    <Form.Item className='justify-self-end'>
                                                        <Select
                                                            allowClear
                                                            defaultValue={"dagelijks"}
                                                        >
                                                            <Option value="dagelijks">Dagelijks</Option>
                                                            <Option value="jaarlijks">Jaarlijks</Option>
                                                            <Option value="maandelijks">Maandelijks</Option>
                                                        </Select>
                                                    </Form.Item>
                                                </div>
                                            </Col>
                                            <Col span={24} className='pb-5'>
                                                <Collapse
                                                    bordered={false}
                                                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                                    className="site-collapse-custom-collapse"
                                                >
                                                    <Panel header="Vermogensontwikkeling aanvullende informatie" key="1" className="site-collapse-custom-panel">
                                                        <DummyTable2 />
                                                    </Panel>
                                                </Collapse>
                                            </Col>
                                        </Row>
                                        <Tabs type="card">
                                            <TabPane tab="Historie" key="1">
                                                <DummyChart2 />
                                            </TabPane>
                                            <TabPane tab="Rendement" key="2">
                                                <DummyChart3 />
                                            </TabPane>
                                            <TabPane tab="Verwachting" key="3">
                                                <DummyChart4 />
                                            </TabPane>
                                        </Tabs>
                                    </TabPane>
                                    <TabPane tab="Risicobeheer en doelstelling" key="2">
                                        <Tabs type="card">
                                            <TabPane tab="Bescherming" key="1">
                                                <DummyChart2 />
                                            </TabPane>
                                            <TabPane tab="Risicobeheer" key="2">
                                                <DummyChart3 />
                                            </TabPane>
                                            <TabPane tab="Realisatie Doelstelling" key="3">
                                                <DummyChart4 />
                                            </TabPane>
                                        </Tabs>
                                    </TabPane>
                                </Tabs>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg={12} sm={24} xs={24}>
                    <Row gutter={[16, 16]}>
                        <Col span={24} data-aos="fade-left">
                            <Card bordered={false} className='primary-bg'>
                                <Space direction="vertical" size="small">
                                    <Title className='font-white' level={5}>Risico- en portefeuilleprofiel</Title>
                                    <Title className='font-white' level={2}>Ostrica Ondernemend Profiel</Title>
                                </Space>
                                <Divider className='white-bg' />
                                <div className="grid justify-items-stretch">
                                    <Title className='font-white justify-self-end m-0' level={5}>uw rekening</Title>
                                </div>
                            </Card>
                        </Col>
                        <Col span={24} data-aos="fade-left">
                            <Card title="Asset Allocatie" bordered={false}>
                                <DummyChart1 />
                            </Card>
                        </Col>
                        <Col span={24} data-aos="fade-left">
                            <Card bordered={false}>
                                <Row>
                                    <Col span={4} className='self-center'>
                                        <GlobalOutlined className='font-size-50 primary-font' />
                                    </Col>
                                    <Col span={20}>
                                        <h3>Ga naar onze Expertise pagina voor ons meest recente blog</h3>
                                        <div className="grid justify-items-stretch">
                                            <Button type="primary" className='green-background justify-self-end'>Expertise pagina</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={24} data-aos="fade-left">
                            <Card bordered={false}>
                                <Row>
                                    <Col span={4} className='self-center'>
                                        <FilePdfOutlined className='font-size-50 primary-font' />
                                    </Col>
                                    <Col span={20}>
                                        <h3>Bekijk de laatste Rapportages</h3>
                                        <div className="grid justify-items-stretch">
                                            <Button type="primary" className='green-background justify-self-end'>Ga naar mijn Rapportages</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={24} data-aos="fade-left">
                            <Card title="Stortingen & Onttrekkingen" bordered={false}>
                                <DummyTable1 />
                            </Card>
                        </Col>
                        <Col span={24} data-aos="fade-left">
                            <Card title="Periodieke stortingen of onttrekkingen" bordered={false}>
                                <Alert
                                    message="Niet van toepassing."
                                    type="info"
                                    closable
                                />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
