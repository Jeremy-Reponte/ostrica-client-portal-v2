import { useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';

interface DataType {
  key: string;
  datum: string;
  activiteit: string;
  activiteiten: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: '1',
    datum: '19-Mar-2013',
    activiteit: 'Onttrekking',
    activiteiten: 'Bedrag: -50.000,00',
  },
  {
    key: '2',
    datum: '02-Jan-2014',
    activiteit: 'Onttrekking',
    activiteiten: 'Bedrag: -450.000,00',
  },
  {
    key: '3',
    datum: '21-May-2014',
    activiteit: 'Onttrekking',
    activiteiten: 'Bedrag: -100.000,00',
  },
  {
    key: '4',
    datum: '18-Nov-2014',
    activiteit: 'Onttrekking',
    activiteiten: 'Bedrag: -124.000,00',
  },
  {
    key: '5',
    datum: '20-Nov-2014',
    activiteit: 'Onttrekking',
    activiteiten: 'Bedrag: -1.000,00',
  },
  {
    key: '6',
    datum: '14-Jan-2015',
    activiteit: 'Onttrekking',
    activiteiten: 'Bedrag: -50.000,00',
  },
  {
    key: '7',
    datum: '15-Mar-2016',
    activiteit: 'Onttrekking',
    activiteiten: 'Bedrag: -50.000,00',
  },
  {
    key: '8',
    datum: '25-Jan-2018',
    activiteit: 'Onttrekking',
    activiteiten: 'Bedrag: -30.000,00',
  },
];

const DummyTable2: React.FC = () => {
  const [, setSearchText] = useState('');
  const [, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    }
  });

  const columns: ColumnsType<DataType> = [
    {
      title: 'Datum',
      dataIndex: 'datum',
      key: 'datum',
      width: '30%',
      ...getColumnSearchProps('datum'),
      sorter: (a, b) => a.datum.length - b.datum.length,
    },
    {
      title: 'Activiteit',
      dataIndex: 'activiteit',
      key: 'activiteit',
      width: '20%',
      ...getColumnSearchProps('activiteit'),
      sorter: (a, b) => a.activiteit.length - b.activiteit.length,
    },
    {
      title: 'Activiteiten Beschrijving',
      dataIndex: 'activiteiten',
      key: 'activiteiten',
      ...getColumnSearchProps('activiteiten'),
      sorter: (a, b) => a.activiteiten.length - b.activiteiten.length,
    },
  ];

  return <Table size={'middle'} scroll={{ x: '20vw' }} bordered columns={columns} dataSource={data} />;
};

export default DummyTable2;