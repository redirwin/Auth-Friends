import React, { useState, useEffect } from "react";
import ListFriends from "./ListFriends";
import axiosWithAuth from "../helpers/axiosWithAuth";

export default function Friends() {
  const [friends, updateFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="friends-page-wrapper">
      <section className="add-friends">
        <h2>Add Friends</h2>
        <form>This is the add friend form...</form>
      </section>
      <section className="show-friends">
        <h2>Friends</h2>
        <ListFriends />
      </section>
    </div>
  );
}
