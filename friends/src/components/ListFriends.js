import React from "react";

export default function ListFriends() {
  const token = localStorage.getItem("token");
  return <div>{token}</div>;
}
