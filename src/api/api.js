import  Axios  from "./index"
import { getListAction } from "../actions";
// import  Axios from "axios"

export function getList  () {
    // let data = await Axios.get("http://mock.studyinghome.com/mock/5e8e9339301a4f07a0c8a866/react/getList")
    // console.log("getList -> data", data)
    // getListAction(data)
    return (dispatch)=>{
        Axios.get("getList").then((res)=>{
            console.log("res", res)
            let data= res.result
            dispatch({
                type:"getList",
                data:data
            })
            // getListAction(data)
        })
    }
}


