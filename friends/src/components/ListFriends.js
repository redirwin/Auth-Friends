import React from "react";

export default function ListFriends(props) {
  return (
    <>
      {props.friends.map(friend => {
        return (
          <div key={friend.id} className="friend-card">
            <span>{friend.name}</span>
            <span>{friend.age}</span>
            <span>{friend.email}</span>
            <span>
              <button>Edit</button>
            </span>
            <span>
              <button>Delete</button>
            </span>
          </div>
        );
      })}
    </>
  );
}
