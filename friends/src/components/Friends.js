import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

import ListFriends from "./ListFriends";
import AddFriends from "./AddFriends";
import axiosWithAuth from "../helpers/axiosWithAuth";

export default function Friends() {
  const [friends, updateFriends] = useState();
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
        <AddFriends updateFriends={updateFriends} />
      </section>
      <section className="show-friends">
        <h2>Friends List</h2>
        {friends ? (
          <ListFriends friends={friends} />
        ) : (
          <div className="loader">
            <Loader type="Puff" color="blue" height={80} width={80} />
          </div>
        )}
      </section>
    </div>
  );
}
