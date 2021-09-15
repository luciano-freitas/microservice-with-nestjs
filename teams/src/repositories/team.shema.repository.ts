import * as dynamoose from 'dynamoose';
import { Document } from 'dynamoose/dist/Document';
import { TeamEntity } from 'src/entities/teams.entity';

export type TeamDocument = TeamEntity & Document;

const schema = new dynamoose.Schema(
  {
    initials: {
      type: String,
      required: true,
      hashKey: true,
    },
    playersId: {
      type: Array,
      schema: [String],
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const TeamSchema = dynamoose.model<TeamDocument>('team', schema);
