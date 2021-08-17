import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import {
  CreatePlayerBodyDto,
  FindPlayerByIdDto,
  CreatePlayerResponseDto,
  FindPlayerResponseDto,
  DeletePlayerByIdDto,
  DeletePlayerResponseDto,
} from './dto';

@ApiTags('Players')
@Controller('players')
export class PlayersController {
  constructor(
    @Inject('PLAYER_SERVICE') private readonly playerServiceClient: ClientProxy,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Endpoint responsável por efetuar o cadastro do jogador',
  })
  @ApiResponse({
    status: 201,
    description: 'Status de confirmação',
    type: CreatePlayerResponseDto,
  })
  create(
    @Body() createPlayerBodyDto: CreatePlayerBodyDto,
  ): CreatePlayerResponseDto {
    this.playerServiceClient.emit('create_player', createPlayerBodyDto);

    return {
      status: 'ok',
    };
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Endpoint responsável por retornar um único jogador',
  })
  @ApiResponse({
    status: 201,
    description: 'Retorno do jogador',
    type: FindPlayerResponseDto,
  })
  findById(@Param() _id: FindPlayerByIdDto): Observable<any> {
    return this.playerServiceClient.send('find_player_by_id', _id);
  }

  @Get()
  @ApiOperation({
    summary: 'Endpoint responsável por retornar uma lista de jogadores',
  })
  @ApiResponse({
    status: 201,
    description: 'Retorno dos jogadores',
    isArray: true,
    type: FindPlayerResponseDto,
  })
  findAll(): Observable<any> {
    return this.playerServiceClient.send('find_player_all', {});
  }

  @Delete('/:id')
  @ApiOperation({
    summary: 'Endpoint responsável por deletar um jogador',
  })
  @ApiResponse({
    status: 201,
    description: 'Confirmação da exclusão',
    isArray: true,
    type: DeletePlayerResponseDto,
  })
  deleteById(@Param() _id: DeletePlayerByIdDto): DeletePlayerResponseDto {
    this.playerServiceClient.emit('delete_player_by_id', _id);

    return {
      status: 'ok',
    };
  }
}
