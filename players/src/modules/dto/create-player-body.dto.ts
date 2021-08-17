import { GenderEnum } from 'src/common/enum/gender.enum';

export class CreatePlayerBodyDto {
  readonly name: string;
  readonly age: number;
  readonly email: string;
  readonly gender: GenderEnum;
  readonly city?: number;
}
