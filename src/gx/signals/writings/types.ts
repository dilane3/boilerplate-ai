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
  updateConfig: (payload: { writingId: number; config: any }) => void;
  updateImage: (payload: { writingId: number; image: string }) => void;
  updateContent: (payload: { writingId: number; content: string }) => void;
};

export type WritingOperations = {
  getWritingById: (id: number) => Writing;
};
