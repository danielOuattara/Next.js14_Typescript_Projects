import { createStore } from "redux";
import { friendsReducer } from "./friends/friends-reducer";

export default createStore(friendsReducer);
