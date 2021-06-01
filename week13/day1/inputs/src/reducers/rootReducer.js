import { combineReducers } from "redux";
import username from "./username-reducer";
import email from "./email-reducer";
import info from "./info-reducer";

const rootReducer = combineReducers({
  username,
  email,
  info,
});

export default rootReducer;
