import React from "react";
import FriendCard from "./FriendCard";

export default function ListFriends(props) {
  const token = localStorage.getItem("token");
  return (
    <div>
      {props.friends.map(friend => {
        return <FriendCard friend={friend} />;
      })}
    </div>
  );
}
