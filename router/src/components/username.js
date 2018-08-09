import React, { Component } from "react";

const Username = ({ match }) => {
  return <p>USERNAME: {match.params.username}</p>;
};

export default Username;
