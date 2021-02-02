import _ from "lodash";
import { Input_Change,Click_Change,Click_Delete} from "@/store/actionTypes"
//改为下面的引入

const defaultState={
  inputValue:"",
  List:[
  ]
}

export default (state=defaultState,action:any)=>{
  if(action.type===Input_Change){
    const newState:{}=_.cloneDeep(state)
    newState.inputValue=action.value;
    return newState;
  }
  if(action.type===Click_Change){
    const newState:{}=_.cloneDeep(state)
    newState.List.push(newState.inputValue)
    newState.inputValue="";
    return newState;
  }
  if(action.type===Click_Delete){
    const newState:{}=_.cloneDeep(state)
    newState.List.splice(action.value,1)
    return newState;
  }
  return state
}
