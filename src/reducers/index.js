
const initialState = {
  count: 0,
  userInfo:{},
  list:[]
};
export default (state = initialState, action)=> {
console.log("action", action)
    const count = state.count
    switch (action.type) {
      case 'increase':
      console.log("increase", "increase")
        return { 
          ...state,
          count: count -1 }
      case 'add':
      console.log("add", "add")
        return { 
          ...state,
          count: count + 1 }
      case 'userInfo':
        return { 
          ...state,
          userInfo: {
            userName:"zhangsan",
            userId:222,
            code:"zhangsan"
        } }
      case 'getList':
          console.log("getList", "getList",action)
            return { 
              ...state,
              list: action.data }  
      default:
        return state
    }
  }
