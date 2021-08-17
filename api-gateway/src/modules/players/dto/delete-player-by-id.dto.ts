import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DeletePlayerByIdDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly id: string;
}
