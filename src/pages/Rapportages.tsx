import { FC } from 'react';
import {
    Card,
    Col,
    Row
} from 'antd';

export const Rapportages: FC = () => {
    return (
        <div className='rapportages-container'>
            <Row gutter={[16,16]}>
                <Col lg={12} sm={24} xs={24} data-aos="fade-right">
                    <Card title="Ostrica Rapportages" bordered={false}>
                        <p>
                            Elk kwartaal geven wij online onze visie met betrekking tot de actuele
                            marktontwikkelingen en hoe wij hierop anticiperen in ons beleggingsbeleid.
                            Hier kunt u uw kwartaalrapportage downloaden.
                        </p>
                        <div className='alert-default p-5 rounded-md'>
                            <p className='m-0'>Geen informatie.</p>
                        </div>
                        <p className='mt-5'>
                            De verschillende rapportages geven u inzicht in de performance, uw portefeuille en
                            de mutaties over het afgelopen kwartaal.
                        </p>
                        <div className='alert-default p-5 rounded-md'>
                            <p className='m-0'>Geen informatie.</p>
                        </div>
                    </Card>
                </Col>
                <Col lg={12} sm={24} xs={24} data-aos="fade-up">
                    <Card title="Uw Jaaropgave" bordered={false}>
                        <p>
                            Wanneer Binckbank of IQEQ uw depotbank voor uw Ostrica beleggingen is,
                            kunt u hier uw jaaropgave downloaden.
                        </p>
                        <p>
                            De jaaropgaves van InsingerGilissen worden per mail verstuurd.
                        </p>
                        <div className='alert-default p-5 rounded-md'>
                            <p className='m-0'>Geen informatie.</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
