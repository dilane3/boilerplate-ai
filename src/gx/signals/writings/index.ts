import { createSignal } from "@dilane3/gx";
import { WritingState } from "./types";
import Writing from "../../../entities/writing/Writing";

const writingSignal = createSignal<WritingState>({
  name: "writings",
  state: {
    writings: [],
    loading: true,
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
      const index = state.writings.findIndex((w) => w.id === writing.id);

      if (index !== -1) {
        state.writings[index] = writing;
      }

      return state;
    },

    updateConfig: (state, payload: { writingId: number, config: any }) => {
      const writing = state.writings.find((w) => w.id === payload.writingId);

      if (writing) {
        writing.config = payload.config;
      }

      return state;
    },

    updateImage: (state, payload: { writingId: number, image: string }) => {
      const writing = state.writings.find((w) => w.id === payload.writingId);

      if (writing) {
        writing.image = payload.image;
      }

      return state;
    },

    deleteWriting: (state, id: number) => {
      const index = state.writings.findIndex((w) => w.id === id);

      if (index !== -1) {
        state.writings.splice(index, 1);
      }

      return state;
    },
  },

  operations: {
    getWritingById: (state, id: number) => {
      return state.writings.find((w) => w.id === id);
    }
  }
});

export default writingSignal;
