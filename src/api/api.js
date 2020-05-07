import  Axios  from "./index"
import { getListAction } from "../actions";
// import  Axios from "axios"

export const getList = ()=> dispatch=>{
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


