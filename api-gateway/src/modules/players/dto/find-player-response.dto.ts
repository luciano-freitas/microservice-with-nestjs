import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { GenderEnum } from 'src/common/enum/gender.enum';

export class FindPlayerResponseDto {
  @Expose()
  @IsString()
  @ApiProperty({
    required: true,
    description: 'Código do jogador',
    example: '611b04272b5ecdbd96a7e2a1',
  })
  readonly _id: string;

  @Expose()
  @IsNumber()
  @ApiProperty({
    required: true,
    description: 'Versão do registro no banco',
    example: '0',
  })
  readonly __v: number;

  @Expose()
  @IsString()
  @ApiProperty({
    required: true,
    description: 'Nome do jogador',
    example: 'Jogador 1',
  })
  readonly name: string;

  @Expose()
  @IsNumber()
  @ApiProperty({
    required: true,
    description: 'Idade do jogador',
    example: 20,
    maxLength: 3,
  })
  readonly age: number;

  @Expose()
  @IsString()
  @ApiProperty({
    required: true,
    description: 'E-mail do jogador',
    example: 'jogador@nestjs.com',
  })
  readonly email: string;

  @Expose()
  @IsString()
  @ApiProperty({
    required: true,
    description: 'Sexo do jogador',
    example: 'M',
    enum: GenderEnum,
  })
  readonly gender: GenderEnum;

  @Expose()
  @IsString()
  @Optional()
  @ApiProperty({
    required: false,
    description: 'Nome da cidade em que reside',
    example: 'Curitiba',
  })
  readonly city?: string;
}
