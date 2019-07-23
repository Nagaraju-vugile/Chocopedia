import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import brandsReducer from "./brandsReducer";
import signUpReducer from "./signUpReducer";
import isLoggedInReducer from "./isLoggedInReducer";

const rootReducer = combineReducers({
  brand: brandsReducer,
  login: loginReducer,
  signUp: signUpReducer,
  isLoggedIn: isLoggedInReducer
});

export default rootReducer;
