import { useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';

interface DataType {
  key: string;
  bedrag: string;
  datum: string;
  omschrijving: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: '1',
    bedrag: '€ -30.000,00',
    datum: '21-feb-2022',
    omschrijving: 'Eenmalige opname. Reden: Onttrekking 2022',
  },
  {
    key: '1',
    bedrag: '€ -145,16',
    datum: '03-nov-2021',
    omschrijving: 'Dividendbelasting 2020',
  },
  {
    key: '1',
    bedrag: '€ -1.654,73',
    datum: '01-jul-2021',
    omschrijving: 'Dividendbelasting 2020',
  },
  {
    key: '1',
    bedrag: '€ -34,81',
    datum: '01-jul-2021',
    omschrijving: 'Dividendbelasting 2020',
  },
  {
    key: '1',
    bedrag: '€ -513,14',
    datum: '01-jul-2021',
    omschrijving: 'Dividendbelasting 2020',
  },
];

const DummyTable1: React.FC = () => {
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
      title: 'Bedrag',
      dataIndex: 'bedrag',
      key: 'bedrag',
      width: '30%',
      ...getColumnSearchProps('bedrag'),
      sorter: (a, b) => a.bedrag.length - b.bedrag.length,
    },
    {
      title: 'Datum',
      dataIndex: 'datum',
      key: 'datum',
      ...getColumnSearchProps('datum'),
      sorter: (a, b) => a.datum.length - b.datum.length,
    },
    {
      title: 'Omschrijving',
      dataIndex: 'omschrijving',
      key: 'omschrijving',
      ...getColumnSearchProps('omschrijving'),
      sorter: (a, b) => a.omschrijving.length - b.omschrijving.length,
    }
  ];

  return <Table size={'middle'} bordered columns={columns} dataSource={data} />;
};

export default DummyTable1;