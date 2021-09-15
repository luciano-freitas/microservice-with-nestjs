import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class TeamResponseDto {
  @Expose()
  @IsString()
  @ApiProperty({
    required: true,
    description: 'Nome do time',
    example: 'Time A',
  })
  readonly name: string;

  @Expose()
  @IsArray()
  @IsOptional()
  @ApiProperty({
    isArray: true,
    required: false,
    description: 'Array de id dos jogadores',
    example: ['1234', '9876'],
  })
  readonly playersId?: string[];

  @Expose()
  @IsString()
  @ApiProperty({
    required: true,
    description: 'Sigla do time',
    example: 'BF',
  })
  readonly initials: string;

  @Expose()
  @ApiProperty({
    type: Date,
    format: 'date-time',
    required: true,
    description: 'Data de criação',
  })
  readonly createdAt: Date;

  @Expose()
  @ApiProperty({
    type: Date,
    format: 'date-time',
    required: true,
    description: 'Data de atualização',
  })
  readonly updatedAt: Date;
}
