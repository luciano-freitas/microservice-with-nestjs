import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePlayerResponseDto {
  @IsString()
  @ApiProperty({
    required: true,
    description: 'Retorna uma confirmação',
  })
  readonly status: string;
}
