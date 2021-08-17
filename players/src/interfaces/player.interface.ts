import { Document, Types } from 'mongoose';

export interface IPlayer {
  _id?: Types.ObjectId;
  name: string;
  age: number;
  email: string;
  gender: string;
  city?: string;
}

export interface IPlayerDocument extends IPlayer, Document<Types.ObjectId> {
  _id: Types.ObjectId;
}
