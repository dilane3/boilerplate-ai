type WritingData = {
  id: number;
  type: string;
  description: string;
  createdAt: Date;
  ownerId: number;
  content: string;
  deleted: boolean;
  history: any;
  config: any;
  image: string;
}

export default class Writing {
  private _id: number;
  private _type: string;
  private _description: string;
  private _createdAt: Date;
  private _ownerId: number;
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
    this._content = data.content;
    this._deleted = data.deleted;
    this._history = data.history;
    this._config = data.config;
    this._image = data.image;
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

  get ownerId(): number {
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
}
