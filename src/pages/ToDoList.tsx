import React, { Component } from 'react';
import store from '@/store/';
import { InputChange, ClickChange, ClickDelete } from '@/store/actionCreators';
import ToDoListUI from '@/pages/ToDoListUI';
import axios from 'axios';
import 'antd/dist/antd.css';

class ToDoList extends Component {
  constructor(props: any) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleInPutChange = this.handleInPutChange.bind(this);
    this.handleClickChange = this.handleClickChange.bind(this);
    this.handleListClickChange = this.handleListClickChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <ToDoListUI
        inputValue={this.state.inputValue}
        handleInPutChange={this.handleInPutChange}
        handleClickChange={this.handleClickChange}
        List={this.state.List}
        handleListClickChange={this.handleListClickChange}
      />
    );
  }
  componentDidMount() {
    axios
      .get(
        'http://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz',
      )
      .then((res) => {
        console.log(res);
      });
    /* const action=RequestDate();
    store.dispatch(action) */
  }

  handleInPutChange(e: any) {
    const action = InputChange(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleClickChange() {
    const action = ClickChange();
    store.dispatch(action);
  }

  handleListClickChange(index) {
    const action = ClickDelete(index);
    store.dispatch(action);
  }
}
export default ToDoList;
