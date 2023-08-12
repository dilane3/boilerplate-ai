import Writing from "../../../entities/writing/Writing";

export type WritingState = {
  writings: Writing[];
  loading: boolean;
};

export type WritingActions = {
  loadWritings: (writings: Writing[]) => void;
  addWriting: (writing: Writing) => void;
  updateWriting: (writing: Writing) => void;
  deleteWriting: (id: number) => void;
};

export type WritingOperations = {
  getWritingById: (id: number) => Writing;
};
