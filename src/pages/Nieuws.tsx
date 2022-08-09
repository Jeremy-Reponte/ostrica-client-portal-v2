import { FC } from 'react';
import { Button, Col, Collapse, Row } from 'antd';
import {
    CaretRightOutlined,
    FilePdfOutlined
} from '@ant-design/icons';

const { Panel } = Collapse;

export const Nieuws: FC = () => {
    return (
        <div className='nieuws-container pt-10' data-aos="fade-right">
            <Collapse
                accordion
                ghost
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            >
                <Panel className='mb-2' header="Actie(voorwaarden) Campagne 'bring a friend'" key="1">
                    <p>
                        Het aanbrengen van nieuwe relaties via u als bestaande relatie waarderen wij zeer.
                        In het kader van ons 25 jarig jubileum jaar hebben wij hier een speciale actie aan
                        gekoppeld. Meer informatie en de geldende actievoorwaarden voor deze campagne kunt u
                        onder 'download pdf' terugvinden.
                    </p>
                    <Row className='mt-5'>
                        <Col span={12}>
                            <h3>13 jul 2022, woensdag</h3>
                        </Col>
                        <Col span={12}>
                            <div className="grid justify-items-stretch">
                                <Button icon={<FilePdfOutlined />} type="primary" className='secondary-background justify-self-end'>Lees meer</Button>
                            </div>
                        </Col>
                    </Row>
                </Panel>
                <Panel className='mb-2' header="2e kwartaalrapportage staat klaar!" key="2">
                    <p>
                        Het is halverwege het jaar en de wereld lijkt in brand te staan. Het voorzichtige optimisme
                        dat nog zichtbaar was in het eerste kwartaal, heeft plaatsgemaakt voor brandjes blussen als
                        nieuwe strategie van veel bedrijven. Echter kun je een trap oplopen of aflopen. Wij kiezen
                        ervoor om met een positieve blik vooruit te kijken en de treden naar boven te bewandelen.
                        In dit tweede kwartaalrapport kunt u lezen dat wij het zowel met onze aandelenfondsen als
                        obligatiefondsen beter hebben gedaan dan vergelijkbare fondsen. Veel leesplezier! Mocht u
                        vragen hebben dan horen wij dit graag.
                    </p>
                    <Row className='mt-5'>
                        <Col span={12}>
                            <h3>07 jul 2022, woensdag</h3>
                        </Col>
                        <Col span={12}>
                            <div className="grid justify-items-stretch">
                                <Button icon={<FilePdfOutlined />} type="primary" className='secondary-background justify-self-end'>Lees meer</Button>
                            </div>
                        </Col>
                    </Row>
                </Panel>
                <Panel className='mb-2' header="Dividendaankondiging" key="3">
                    <p>
                        Graag delen wij u mee dat dividend wordt uitgekeerd in onze Subfondsen met als peildatum 30 juni
                        2022. De fondsen zullen op 1 juli 2022 ex dividend handelen. Van de (netto)dividenduitkering
                        kopen wij extra participaties aan. De dividenduitkeringen per subfonds ziet u in deze
                        dividendaankondiging.
                    </p>
                    <Row className='mt-5'>
                        <Col span={12}>
                            <h3>01 jul 2022, woensdag</h3>
                        </Col>
                        <Col span={12}>
                            <div className="grid justify-items-stretch">
                                <Button icon={<FilePdfOutlined />} type="primary" className='secondary-background justify-self-end'>Lees meer</Button>
                            </div>
                        </Col>
                    </Row>
                </Panel>
            </Collapse>
        </div>
    );
}