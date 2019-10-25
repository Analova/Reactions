import React, { Component } from "react";
import { PubSubContext } from "../pubsub";
import { newMessage } from "../actions/messages";

class PublishMessage extends Component {
  state = { text: "" };

  updateText = e => {
    this.setState({ text: e.target.value });
  };

  publishMessage = () => {
    this.context.pubsub.publish(newMessage(this.state.text));
  };

  handleKeyPress = e => {
    if (e.key === "Enter") this.publishMessage();
  };

  render() {
    console.log("this", this);
    return (
      <div>
        Got something to say?
        <input
          type="text"
          onChange={this.updateText}
          onKeyPress={this.handleKeyPress}
        />{" "}
        <button onClick={this.publishMessage}>Publish it!</button>
      </div>
    );
  }
  static contextType = PubSubContext;
}

//PublishMessage.contextType = PubSubContext;

export default PublishMessage;
