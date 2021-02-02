import React,{Component} from 'react';
import store from "@/store/"
import { Input_Change,Click_Change,Click_Delete} from "@/store/actionTypes"
import {InputChange,ClickChange,ClickDelete } from "@/store/actionCreators"
import {
  Button, Input,List
} from 'antd';

import 'antd/dist/antd.css';


class ToDoList extends Component{
  constructor(props:any) {
    super(props);
    this.state=store.getState()
    this.handleStoreChange=this.handleStoreChange.bind(this)
    this.handleInPutChange=this.handleInPutChange.bind(this)
    this.handleClickChange=this.handleClickChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }
 render() {
   return (
     <div>
       <Input
         value={this.state.inputValue}
         placeholder="请输入计划"
         style={{
         width:"300px",
         margin:"10px"
       }}
         onChange={this.handleInPutChange}/>
       <Button
         type="primary"
         style={{width:"80px"}}
         onClick={this.handleClickChange}
       >添加</Button>
       <List
         size="small"
         bordered
         dataSource={this.state.List}
         renderItem={(item,index) => <List.Item onClick={this.handleListClickChange.bind(this,index)}
         >{item}</List.Item>}
         style={{
           margin:"10px",
           width:"380px"}}
       />

     </div>
   );

 }

  handleInPutChange(e:any){
   const action = InputChange(e.target.value)
   store.dispatch(action)
  }

  handleStoreChange(){
    this.setState(store.getState())
  }

  handleClickChange(){
    const action = ClickChange()
    store.dispatch(action)
  }

  handleListClickChange(index){
    const action = ClickDelete(index)
    store.dispatch(action)
  }
}
export default ToDoList
