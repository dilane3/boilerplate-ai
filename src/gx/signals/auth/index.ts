import { createSignal } from "@dilane3/gx";
import { AuthState } from "./types";
import User from "../../../entities/user/User";

const authSignal = createSignal<AuthState>({
  name: "auth",
  state: {
    user: null,
    loading: true,
  },
  actions: {
    login: (state, user: User | null) => {
      state.user = user;
      state.loading = false;

      return state;
    },

    logout: (state) => {
      state.user = null;

      return state;
    }
  }
});

export default authSignal;