import {combineReducers} from "redux";
import { apiReducer } from "./apiReducer";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
    api: apiReducer,
    auth: authReducer,
    cart: cartReducer,
});