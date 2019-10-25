import React from "react";
import { connect } from "react-redux";

const MessageBoard = ({ messages }) => {
  return (
    <div>
      {messages.items.map(msgItem => {
        const { id, text, timestamp, username } = msgItem;

        return (
          <div key={id}>
            <h4>{new Date(timestamp).toLocaleDateString()}</h4>
            <p>{text}</p>
            <h4>-{username}</h4>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default connect(({ messages }) => ({ messages }))(MessageBoard);
