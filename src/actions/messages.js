//https://admin.pubnub.com/#/user/525943/account/525901/app/35323832/key/709602/

import { NEW_MESSAGE } from "./types";
import uuid from "uuid/v4";

export const newMessage = text => ({
  type: NEW_MESSAGE,
  item: { text, timestamp: Date.now(), id: uuid() }
});
