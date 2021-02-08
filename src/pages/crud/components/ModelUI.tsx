import React, { useEffect } from 'react';
import { Modal,Form, Input,Popconfirm } from 'antd';

const ModelUI = (props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    // Update the document title using the browser API
    form.setFieldsValue(props.record)
  });

  const handleOk=()=>{
    props.SetModelVisible(false)
  }
  const handleCancel=()=>{
    props.SetModelVisible(false)
  }
  return (
    <>
      <Modal
        title="个人信息编辑"
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}
        forceRender>
        <Form
          name="basic"
          form={form}
        >
           <Form.Item
             label="Name"
             name="name"
           >
             <Input />
           </Form.Item>

          <Form.Item
            label="Email"
            name="email"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModelUI
