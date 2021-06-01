import { combineReducers } from "redux";
import username from "./username-reducer";
import email from "./email-reducer";

const rootReducer = combineReducers({
  username,
  email,
});

export default rootReducer;
