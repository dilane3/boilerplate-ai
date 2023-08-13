export enum ModalType {
  WRITING_CREATE = 'WRITING_CREATE',
  DEFAULT = 'DEFAULT',
}

export type ModalState = {
  isOpened: boolean;
  type: ModalType;
};

export type ModalActions = {
  open: (type: ModalType) => void;
  close: () => void;
};
