import { createStore } from "@dilane3/gx";
import authSignal from "../signals/auth";

const store = createStore([authSignal]);

export default store;