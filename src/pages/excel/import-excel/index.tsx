import React from 'react';
import { message, Upload, Table } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Container from '@comp/layout/container';
import XLSX from 'xlsx';
const { Dragger } = Upload;

const index = () => {
  const [columns, setColumns] = React.useState([]);
  const [dataSource, setDataSource] = React.useState<{}>([]);
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
        let data: Array<{ [key: string]: string }> = [];
        for (let sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            data = data.concat(
              XLSX.utils.sheet_to_json(workbook.Sheets[sheet], { defval: '' }),
            );
            break;
          }
        }
        // const tableData = data.map((item,index)=>{
        //     return {
        //         key:index,
        //         ...item
        //     }
        // })
        // setDataSource(tableData);
      } catch (e) {
        return;
      }
    };
    fileReader.readAsBinaryString(file);
    return false;
  };

  /**
   * 拖拽文件
   * @param e
   * @returns
   */
  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const files = e.dataTransfer.files;
    console.log(files);
    if (files.length > 1) {
      message.error('limit only one file');
      return;
    }
    const file = files[0];
    handleImportExcel(file);
  };

  const props = {
    accept: '.xls,.xlsx',
    showUploadList: false,
    beforeUpload: handleImportExcel,
    maxCount: 1,
    onDrop: handleFileDrop,
  };
  return (
    <Container>
      <div className="excel-import-excel">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
        {/* <Table
                    columns={columns}
                    dataSource={dataSource}
                /> */}
      </div>
    </Container>
  );
};

export default index;
