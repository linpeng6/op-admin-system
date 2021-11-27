import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import Container from '@comp/layout/container';
import { FileExcelOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import './index.less';

const defaultFileName = 'op-excel';
const index: React.FC<{}> = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  const dataSource = [
    {
      key: '1',
      id: '0',
      title: 'vue',
      author: 'op',
      date: dayjs().format('YYYY-MM-DD'),
    },
    {
      key: '2',
      id: '1',
      title: 'react',
      author: 'op',
      date: dayjs().format('YYYY-MM-DD'),
    },
    {
      key: '3',
      id: '2',
      title: 'angular',
      author: 'op',
      date: dayjs().format('YYYY-MM-DD'),
    },
  ];
  /**
   * input onchange
   * @param e
   */
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleExportExcel = () => {};
  return (
    <Container>
      <div className="excel-export-excel">
        <section style={{ marginBottom: 20 }}>
          <label className="excel-export-excel-fileName">Filename:</label>
          <Input
            style={{ width: '350px' }}
            value={inputValue}
            prefix={<FileExcelOutlined style={{ color: '#c0c4cc' }} />}
            placeholder="请输入文件名(默认op-excel)"
            onChange={handleChangeInput}
          />
          <Button type="primary" onClick={handleExportExcel}>
            导出Excel
          </Button>
        </section>
        <section>
          <Table columns={columns} dataSource={dataSource} />
        </section>
      </div>
    </Container>
  );
};

export default index;
