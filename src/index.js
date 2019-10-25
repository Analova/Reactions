import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import App from "./components/App";
import "./index.css";
import { newMessage } from "./actions/messages";
import PubSub, { PubSubContext } from "./pubsub";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("store.getState()", store.getState());
store.subscribe(() => console.log("store.getState()", store.getState()));

const pubsub = new PubSub();

pubsub.addListener({
  message: messageObject => {
    const { message, channel } = messageObject;

    console.log("Recieved Message", message, "channel", channel);

    store.dispatch(message);
  }
});

setTimeout(() => {
  pubsub.publish(newMessage({ text: "Hello world!", username: "David" }));
}, 1000);

ReactDOM.render(
  <Provider store={store}>
    <PubSubContext.Provider value={{ pubsub }}>
      <App />
    </PubSubContext.Provider>
  </Provider>,
  document.getElementById("root")
);
