import { createStore } from "@dilane3/gx";
import authSignal from "../signals/auth";
import writingSignal from "../signals/writings";
import modalSignal from "../signals/modal";

const store = createStore([authSignal, writingSignal, modalSignal]);

export default store;