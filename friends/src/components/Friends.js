import React, { useState, useEffect } from "react";
import ListFriends from "./ListFriends";
import AddFriends from "./AddFriends";
import axiosWithAuth from "../helpers/axiosWithAuth";

export default function Friends() {
  const [friends, updateFriends] = useState([]);
  console.log(friends);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        updateFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="friends-page-wrapper">
      <section className="add-friends">
        <h2>Add Friends</h2>
        <AddFriends />
      </section>
      <section className="show-friends">
        <h2>Friends</h2>
        <ListFriends friends={friends} />
      </section>
    </div>
  );
}
