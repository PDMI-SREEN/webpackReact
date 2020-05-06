
const initialState = {
    userInfo: {}
  };
  export default (state = initialState, action)=> {
      const count = state.count
      switch (action.type) {
        case 'userInfo':
        console.log("userInfo", "userInfo")
          return { 
            ...state,
            userInfo: {
                userName:"zhangsan",
                userId:222,
                code:"zhangsan"
            }}
        default:
          return state
      }
    }
  