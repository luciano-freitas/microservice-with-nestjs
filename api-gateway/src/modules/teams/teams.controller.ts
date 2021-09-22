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
  CreateTeamBodyDto,
  DeleteTeamByInitialsDto,
  FindTeamByInitialsDto,
  TeamResponseDto,
} from './dto';

@ApiTags('Teams')
@Controller('teams')
export class TeamsController {
  constructor(
    @Inject('TEAM_SERVICE') private readonly teamServiceClient: ClientProxy,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Endpoint responsável por efetuar o cadastro de um time',
  })
  @ApiResponse({
    status: 201,
    description: 'Retorna od dados da criação do time',
    type: TeamResponseDto,
  })
  async create(
    @Body() createTeamBodyDto: CreateTeamBodyDto,
  ): Promise<Observable<TeamResponseDto>> {
    return await this.teamServiceClient.send('create_team', createTeamBodyDto);
  }

  @Get('/:initials')
  @ApiOperation({
    summary: 'Endpoint responsável por retornar um time',
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna os dados do time solicitado',
    type: TeamResponseDto,
  })
  async findByInitials(
    @Param() params: FindTeamByInitialsDto,
  ): Promise<Observable<TeamResponseDto>> {
    return await this.teamServiceClient.send('find_team_by_initials', params);
  }

  @Get()
  @ApiOperation({
    summary: 'Endpoint responsável por retornar uma lista de times',
  })
  @ApiResponse({
    status: 200,
    isArray: true,
    description: 'Retorna os dados dos times',
    type: TeamResponseDto,
  })
  async findAll(): Promise<Observable<TeamResponseDto>> {
    return await this.teamServiceClient.send('find_team_all', '');
  }

  @Delete('/:initials')
  @ApiOperation({
    summary: 'Endpoint responsável por deletar um time',
  })
  @ApiResponse({
    status: 204,
    description: 'Apenas exclui o registro',
  })
  async delete(@Param() params: DeleteTeamByInitialsDto): Promise<Observable<boolean>> {
    return await this.teamServiceClient.send('delete_team_by_initials', params);
  }
}
