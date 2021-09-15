import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class FindTeamByInitialsDto {
  @Expose()
  @IsString()
  @ApiProperty({
    required: true,
    description: 'Sigla do time',
    example: 'BF',
  })
  readonly initials: string;
}
