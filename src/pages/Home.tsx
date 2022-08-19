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
import DummyChart1 from '../components/charts/DummyChart1';
import DummyChart2 from '../components/charts/DummyChart2';
import DummyChart3 from '../components/charts/DummyChart3';
import DummyChart4 from '../components/charts/DummyChart4';
import DummyTable1 from '../components/tables/DummyTable1';
import DummyTable2 from '../components/tables/DummyTable2';
import ChartLegendsTable from '../components/tables/ChartLegendsTable';

const { TabPane } = Tabs;
const { Option } = Select;
const { Panel } = Collapse;
const { Title } = Typography;

const Home = () => {
    return (
        <div className='home-container'>
            <Row gutter={16}>
                <Col lg={12} sm={24} xs={24}>
                    <Row gutter={[16, 16]}>
                        <Col lg={24} xs={24} data-aos="fade-up">
                            <Card bordered={false} className='skyblue-background'>
                                <h5>2e kwartaalrapportage staat klaar!</h5>
                                <p>
                                    Het aanbrengen van nieuwe relaties via u als bestaande relatie waarderen wij zeer.
                                    In het kader van ons 25 jarig jubileum jaar hebben wij hier een speciale actie aan
                                    gekoppeld. Meer informatie en de geldende actievoorwaarden voor deze campagne kunt u
                                    onder 'download pdf' terugvinden.
                                </p>
                                <div className='pt-3 grid grid-cols-1 lg:grid-cols-3 gap-2'>
                                    <Button className='white-bg'>Download PDF</Button>
                                    <Button className='white-bg'>Meer actueel nieuws</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col span={24} data-aos="fade-up">
                            <Card bordered={false}>
                                <Row gutter={[16, 16]}>
                                    <Col lg={6} xs={24} className='self-center hidden lg:block'>
                                        <InfoCircleOutlined className='font-size-100 primary-font' />
                                    </Col>
                                    <Col lg={18} xs={24}>
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
                                    <Col lg={6} className='self-center hidden lg:block'>
                                        <EuroCircleFilled className='font-orange font-size-100' />
                                    </Col>
                                    <Col lg={18} xs={24}>
                                        <h3>Uw vermogen</h3>
                                        <p>2.624.072 per 13 Jul 2022</p>
                                        <div className="grid justify-items-stretch pt-3">
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
                                    <Col lg={4} className='self-center hidden lg:block'>
                                        <GlobalOutlined className='font-size-50 primary-font' />
                                    </Col>
                                    <Col lg={20} xs={24}>
                                        <h3>Ga naar onze Expertise pagina voor ons meest recente blog</h3>
                                        <div className="grid justify-items-stretch pt-3">
                                            <Button type="primary" className='green-background justify-self-end'>Expertise pagina</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={24} data-aos="fade-left">
                            <Card bordered={false}>
                                <Row>
                                    <Col lg={4} className='self-center hidden lg:block'>
                                        <FilePdfOutlined className='font-size-50 primary-font' />
                                    </Col>
                                    <Col lg={20} xs={24}>
                                        <h3>Bekijk de laatste Rapportages</h3>
                                        <div className="grid justify-items-stretch pt-3">
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

export default Home;
