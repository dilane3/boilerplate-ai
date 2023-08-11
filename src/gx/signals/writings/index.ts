import { createSignal } from "@dilane3/gx";
import { WritingState } from "./types";
import Writing from "../../../entities/writing/Writing";

const writingSignal = createSignal<WritingState>({
  name: "writings",
  state: {
    writings: [],
    loading: true
  },
  actions: {
    loadWritings: (state, writings: Writing[]) => {
      state.writings = writings;
      state.loading = false;

      return state;
    },

    addWriting: (state, writing: Writing) => {
      state.writings.push(writing);

      return state;
    },

    updateWriting: (state, writing: Writing) => {
      const index = state.writings.findIndex(w => w.id === writing.id);
      
      if (index !== -1) {
        state.writings[index] = writing;
      }

      return state;
    },

    deleteWriting: (state, id: number) => {
      const index = state.writings.findIndex(w => w.id === id);

      if (index !== -1) {
        state.writings.splice(index, 1);
      }

      return state;
    }
  }
});

export default writingSignal;