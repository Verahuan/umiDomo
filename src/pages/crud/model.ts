import {Reducer,Effect, Subscription} from 'umi';
import {getRemoteList} from "@/pages/crud/service";


interface CrudModelType{
  namespace: "crud";
  state: {};
  reducers: {
    getList:Reducer
  };
  effects: {
    getRemote:Effect
  };
  subscriptions:{
    pathChange:Subscription
  }
}

const CrudModel:CrudModelType={
  namespace:"crud",
  //model的唯一标识
  state:{

  },
  //初始值
  reducers:{
    getList(state,action) {
      console.log(action.payload)
      return action.payload
    }
  },
  effects:{
    *getRemote(action,effects){
      const data=yield effects.call(getRemoteList)
      console.log(data)
      yield effects.put({
        type:"getList",
        payload:data
      })
    }
  },
  //effects中的函数都是异步函数，所以写成*,没有返回值
  subscriptions:{
    pathChange({ dispatch, history }){
      return history.listen(({pathname})=>{
        if(pathname==="/crud") {
          dispatch({
            type: "getRemote"
          })
        }
        })
      }
    }
  }

export default CrudModel
