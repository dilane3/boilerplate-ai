import { createStore } from "@dilane3/gx";
import authSignal from "../signals/auth";
import writingSignal from "../signals/writings";

const store = createStore([authSignal, writingSignal]);

export default store;