import _ from 'lodash';
import {
  Input_Change,
  Click_Change,
  Click_Delete,
  Init_List,
} from '@/store/actionTypes';
// 改为下面的引入

const defaultState = {
  inputValue: '123',
  List: ['huanhuan', 'frist', 'time', 'study'],
};

export default (state = defaultState, action: any) => {
  if (action.type === Input_Change) {
    const newState: {} = _.cloneDeep(state);
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === Click_Change) {
    const newState: {} = _.cloneDeep(state);
    if (newState.inputValue !== '') {
      newState.List.push(newState.inputValue);
    }
    newState.inputValue = '';
    return newState;
  }
  if (action.type === Click_Delete) {
    const newState: {} = _.cloneDeep(state);
    newState.List.splice(action.value, 1);
    return newState;
  }
  if (action.type === Init_List) {
    const newState: {} = _.cloneDeep(state);
    newState.List = action.value;
    return newState;
  }
  return state;
};
