
const increaseAction = { type: 'increase' }
const addAction = { type: 'add' }
const getUserInfoAction = { type: 'userInfo' }

export  function increase (){
        return (dispatch)=>{
            console.log("increase -> increase", "increase")
            dispatch(increaseAction) 
        }
}

export  function add (){     
    return (dispatch)=>{
        console.log("add -> add", "add")
        dispatch(addAction) 
    }
}

export function getUserInfo (){
    return (dispatch)=>{
        dispatch(getUserInfoAction)
    }
}

export function  getListAction(dataList){
console.log("getListAction -> dataList", dataList)
    return (dispatch)=>{
        console.log("getListAction -> dataList", dataList)
            dispatch(
                {
                    type:"getList",
                    data:dataList
                }
            )
    }
}
