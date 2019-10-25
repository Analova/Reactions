import React, { Component } from "react";
import { connect } from "react-redux";
import { PubSubContext } from "../pubsub";
import { newMessage } from "../actions/messages";

class PublishMessage extends Component {
  state = { text: "" };

  updateText = e => {
    this.setState({ text: e.target.value });
  };

  publishMessage = () => {
    const { text } = this.state;
    const { username } = this.props;

    this.context.pubsub.publish(newMessage({ text, username }));
  };

  handleKeyPress = e => {
    if (e.key === "Enter") this.publishMessage();
  };

  render() {
    console.log("this", this);
    return (
      <div>
        <h2> Got something to say?</h2>
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

export default connect(({ username }) => ({ username }))(PublishMessage);
