import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
    key: string;
    icon: string;
    naam: string;
    omschrijving: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Icon',
        dataIndex: 'icon',
        key: 'icon',
        render: icon => <img src={icon} alt="icon"/>,
    },
    {
        title: 'Naam',
        dataIndex: 'naam',
        key: 'naam',
    },
    {
        title: 'Omschrijving',
        dataIndex: 'omschrijving',
        key: 'omschrijving',
    }
];

const data: DataType[] = [
    {
        key: '1',
        icon: '../../assets/zoom_icon.jpg',
        naam: 'Zoom',
        omschrijving: 'Na het klikken op dit icoon kunt u inzoomen op een bepaald gedeelte van de grafiek door enig gedeelte in de grafiek te selecteren. Dit doet u door de muis te plaatsen op een gewenst startpunt en daarna de linkermuisknop te gebruiken en deze te slepen naar het gewenste eindpunt. Hierna zal de grafiek zich op dit gedeelte focussen. U kunt dit proces herhalen zolang er nog data aanwezig is.',
    },
    {
        key: '2',
        icon: '../../assets/undo_icon.jpg',
        naam: 'Zoom ongedaan maken/Teruggaan naar vorige zoom',
        omschrijving: 'Na het klikken op dit icoon zal de grafiek terug gaan naar de vorige situatie.',
    },
    {
        key: '3',
        icon: '../../assets/resetview_icon.jpg',
        naam: 'Zoom resetten',
        omschrijving: 'Na het klikken op dit icoon zal de grafiek weer herstellen naar 100%.',
    },
    {
        key: '4',
        icon: '../../assets/download_as_image_icon.jpg',
        naam: 'Na het klikken op dit icoon zal de actieve grafiek als plaatje worden gedownload.',
        omschrijving: 'Sidney No. 1 Lake Park',
    },
    {
        key: '5',
        icon: '../../assets/legend_icon.jpg',
        naam: 'Legenda',
        omschrijving: 'Het klikken op de legenda iconen in de grafiek zal de punten zichtbaar/onzichtbaar maken.    ',
    }
];

const ChartLegendsTable: React.FC = () => <Table pagination={false} size={'middle'} scroll={{ x: '20vw' }} columns={columns} dataSource={data} />;

export default ChartLegendsTable;