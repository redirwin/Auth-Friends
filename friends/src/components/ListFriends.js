import React from "react";

export default function ListFriends(props) {
  const token = localStorage.getItem("token");
  return (
    <div>
      {props.friends.map(friend => {
        return <>{friend.name}</>;
      })}
    </div>
  );
}
