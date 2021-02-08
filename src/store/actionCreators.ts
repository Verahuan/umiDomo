import { Input_Change,Click_Change,Click_Delete,Init_List} from "@/store/actionTypes"
import fetch from "@/api/request"

export const InputChange=(value)=>({
  type:Input_Change,
    value
})
export const ClickChange=()=>({
  type:Click_Change
})

export const ClickDelete=(value)=>({
  type:Click_Delete,
    value
})
/*export const InitList=(data)=>({
  type:Init_List,
  data
})

export const RequestDate=()=>{
  return (dispatch)=>{
    fetch({
      url: '/charTry',
      method: 'get'
    })
      .then((res)=>{
        console.log(res)
        const data = res;
        const action = InitList(data);
        dispatch(action)
      })
  }
}*/
