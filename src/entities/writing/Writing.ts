export enum WritingType {
  LETTER = "LETTER",
} 

type WritingData = {
  id: number;
  type: WritingType;
  description: string;
  createdAt: Date;
  ownerId: string;
  content?: string;
  deleted?: boolean;
  history?: any;
  config?: any;
  image?: string;
}

export default class Writing {
  private _id: number;
  private _type: WritingType;
  private _description: string;
  private _createdAt: Date;
  private _ownerId: string;
  private _content: string;
  private _deleted: boolean;
  private _history: any;
  private _config: any;
  private _image: string;

  constructor(data: WritingData) {
    this._id = data.id;
    this._type = data.type;
    this._description = data.description;
    this._createdAt = data.createdAt;
    this._ownerId = data.ownerId;
    this._content = data.content || "";
    this._deleted = data.deleted || false;
    this._history = data.history || {};
    this._image = data.image || "";

    if (!data.config) {
      if (data.type === WritingType.LETTER) {
        this._config = {
          sender: {
            name: "",
            address: "",
          },

          receiver: {
            name: "",
            address: "",
          },

          letter: {
            object: "",
            content: "",
          },

          other: {
            value: "",
          }
        };
      }
    } else {
      this._config = data.config;
    }
  }

  get id(): number {
    return this._id;
  }

  get type(): string {
    return this._type;
  }

  get description(): string {
    return this._description;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get ownerId(): string {
    return this._ownerId;
  }

  get content(): string {
    return this._content;
  }

  get deleted(): boolean {
    return this._deleted;
  }

  get history(): any {
    return this._history;
  }

  get config(): any {
    return this._config;
  }

  get image(): string {
    return this._image;
  }

  // Setters

  set content(content: string) {
    this._content = content;
  }

  set deleted(deleted: boolean) {
    this._deleted = deleted;
  }

  set history(history: any) {
    this._history = history;
  }

  set config(config: any) {
    this._config = config;
  }

  set image(image: string) {
    this._image = image;
  }

  // Methods

  public toJSON(): any {
    return {
      id: this._id,
      type: this._type,
      description: this._description,
      createdAt: this._createdAt,
      ownerId: this._ownerId,
      content: this._content,
      deleted: this._deleted,
      history: this._history,
      config: this._config,
      image: this._image,
    };
  }
}
