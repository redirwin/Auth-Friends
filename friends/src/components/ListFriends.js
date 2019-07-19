import React from "react";

import axiosWithAuth from "../helpers/axiosWithAuth";

export default function ListFriends(props) {
  function deleteFriend(e, toDelete) {
    e.preventDefault();
    console.log(toDelete);
    axiosWithAuth()
      .delete(`/api/friends/${toDelete.id}`)
      .then(res => {
        props.updateFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      {props.friends.map(friend => {
        return (
          <div key={friend.id} className="friend-card-wrapper">
            <span>{friend.name}</span>
            <span>{friend.age}</span>
            <span>{friend.email}</span>
            <span>
              <button onClick={e => deleteFriend(e, friend)}>Delete</button>
            </span>
          </div>
        );
      })}
    </>
  );
}
