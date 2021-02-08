import React from 'react';
import { Button, Input, List } from 'antd';

export default (props) => {
  return (
    <div>
      <Input
        value={props.inputValue}
        placeholder="请输入计划"
        style={{
          width:"300px",
          margin:"10px"
        }}
        onChange={props.handleInPutChange}/>
      <Button
        type="primary"
        style={{width:"80px"}}
        onClick={props.handleClickChange}
      >添加</Button>
      <List
        size="small"
        bordered
        dataSource={props.List}
        renderItem={(item,index) => <List.Item onClick={()=>{props.handleListClickChange(index)}}
        >{item}</List.Item>}
        style={{
          margin:"10px",
          width:"380px"}}
      />
    </div>
  );
}
