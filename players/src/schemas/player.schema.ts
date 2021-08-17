import * as mongoose from 'mongoose';

export const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name can not be empty'],
  },
  age: {
    type: Number,
    default: false,
    required: [true, 'Age can not be empty'],
  },
  email: {
    type: String,
    default: false,
    required: [true, 'Email can not be empty'],
  },
  gender: {
    type: String,
    default: false,
    required: [true, 'Gender can not be empty'],
  },
  city: {
    type: String,
    default: false,
    required: false,
  },
});
