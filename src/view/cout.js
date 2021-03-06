
import React,{useState ,useEffect} from "react";
import FriendStatus from "./friendStatus"

const Example=()=> {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });


    // console.log("Example -> (count%2)? true:false", (count%2)? true:false)
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <FriendStatus status ={ (count%2)? true:false} />
      </div>
        
    );
  }


  export default Example
