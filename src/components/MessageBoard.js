import React from "react";
import { connect } from "react-redux";

const MessageBoard = ({ messages }) => {
  return (
    <div>
      {messages.items.map(msgItem => {
        const { id, text, timestamp } = msgItem;

        return (
          <div key={id}>
            <h4>{new Date(timestamp).toLocaleDateString()}</h4>
            <p>{text}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default connect(({ messages }) => ({ messages }))(MessageBoard);
