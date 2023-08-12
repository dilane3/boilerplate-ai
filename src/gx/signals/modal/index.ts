import { createSignal } from "@dilane3/gx";
import { ModalState, ModalType,  } from "./types";

const modalSignal = createSignal<ModalState>({
  name: "modal",
  state: {
    isOpened: false,
    type: ModalType.DEFAULT
  },
  actions: {
    open: (state, payload: ModalType) => {
      state.isOpened = true;
      state.type = payload;

      return state;
    },

    close: (state) => {
      state.isOpened = false;
      state.type = ModalType.DEFAULT;

      return state;
    }
  }
})

export default modalSignal;