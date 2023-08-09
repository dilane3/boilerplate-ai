import { createSignal } from "@dilane3/gx";
import { AuthState } from "./types";

const authSignal = createSignal<AuthState>({
  name: "auth",
  state: {
    user: null,
    loading: true,
  },
  actions: {},
  operations: {},
});

export default authSignal;