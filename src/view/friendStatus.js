import React, { useState, useEffect } from 'react';

const  FriendStatus=(props)=> {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
      
    handleStatusChange(props.status)
    console.log("FriendStatus -> props.status", props.status)
    //   if(props.status){
    //     handleStatusChange(props.status)
    //   }else{
    //     handleStatusChange(props.status)
    //   }
    // // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    
    // handleStatusChange(props.status)
    // return () => {
    //     // props.status
    //     handleStatusChange(props.status)
    // //   ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    // };
  });


//   if (isOnline === null) {
//     return 'Loading...';
//   }
  return props.status ? 'Online' : 'Offline';
}

export default FriendStatus