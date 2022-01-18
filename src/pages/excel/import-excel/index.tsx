import React from 'react';
import { Upload, Table, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { UploadOutlined } from '@ant-design/icons';
import XLSX from 'xlsx';
import './index.less';

interface ExcelData {
  key: number;
  id: string | number;
  name: string;
  content: string;
}
const index = () => {
  const columns: ColumnsType<ExcelData> = [
    {
      title: 'id',
      key: 'id',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: 'name',
      key: 'name',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: 'content',
      key: 'content',
      dataIndex: 'content',
      align: 'center',
    },
  ];
  const [dataSource, setDataSource] = React.useState<ExcelData[]>([]);
  /**
   * 导入excel
   * @param file
   */
  const handleImportExcel = (file: File) => {
    const fileReader = new FileReader();
    fileReader.onload = (e: ProgressEvent<FileReader>) => {
      try {
        const { result } = e.target as FileReader;
        const workbook = XLSX.read(result, { type: 'binary' });
        let data: ExcelData[] = [];
        for (let sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            data = data.concat(
              XLSX.utils.sheet_to_json(workbook.Sheets[sheet], { defval: '' }),
            );
            break;
          }
        }
        const tableData = data.map((item, index) => {
          return {
            ...item,
            key: index,
          };
        });
        setDataSource(tableData);
      } catch (e) {
        return;
      }
    };
    fileReader.readAsBinaryString(file);
    return false;
  };

  const props = {
    accept: '.xls,.xlsx',
    showUploadList: false,
    beforeUpload: handleImportExcel,
    maxCount: 1,
  };
  return (
    <div className="excel-import-excel">
      <section style={{ marginBottom: 20 }}>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Import Excel</Button>
        </Upload>
        <p className="excel-import-excel-issue">
          The current table header is fixed, how to set the dynamic table
          header, pls pull issue to tell me, thanks!
        </p>
      </section>
      <section>
        <Table rowKey="key" columns={columns} dataSource={dataSource} />
      </section>
    </div>
  );
};

export default index;
