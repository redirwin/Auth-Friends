import React from "react";

export default function FriendCard(props) {
  return <div key={props.friend.id}>{props.friend.name}</div>;
}
