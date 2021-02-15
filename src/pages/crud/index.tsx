import React, { useState } from 'react';
import { connect } from 'umi';

import { Table, Space, Button } from 'antd';
import ModelUI from '@/pages/crud/components/ModelUI';

const index = ({ crud, dispatch }) => {
  const [ModelVisible, SetModelVisible] = useState(false);
  const [record, setRecord] = useState({ name: '11' });
  const EditModelVisible = (value) => {
    SetModelVisible(true);
    setRecord(value);
  };
  const onFinish = (values: any) => {
    const { id } = record;
    dispatch({
      type: 'crud/goEdit',
      payload: {
        values,
        id,
      },
    });
    // 需要加namespace,传到对应的model中
    console.log('Success:', values);
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Edit',
      render: (text, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              EditModelVisible(record);
            }}
          >
            显示Model
          </Button>
          <Button>Delete</Button>
        </Space>
      ),
    },
  ];
  return (
    <div className="list-table">
      <Table
        columns={columns}
        dataSource={crud.data}
        rowKey="id"
        pagination={{ defaultPageSize: 5 }}
      />
      <ModelUI
        visible={ModelVisible}
        SetModelVisible={SetModelVisible}
        record={record}
        onFinish={onFinish}
      />
    </div>
  );
};

const mapStateToProps = ({ crud }) => {
  return {
    crud,
  };
};

export default connect(mapStateToProps)(index);
