import React, { useState, useEffect, SetStateAction } from 'react'
const  FriendStatus=(props)=> {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    handleStatusChange(props.status)
    console.log("FriendStatus -> props.status", props.status)
 
  });
  return props.status ? 'Online' : 'Offline';
}

export default FriendStatus

