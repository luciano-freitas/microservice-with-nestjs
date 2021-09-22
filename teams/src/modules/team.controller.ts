import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ScanResponse } from 'dynamoose/dist/DocumentRetriever';
import {
  CreateTeamBodyDto,
  FindTeamByInitialsDto,
  TeamResponseDto,
} from './dto';
import { DeleteTeamByInitialsDto } from './dto/delete-team-by-initials.dto';
import { TeamService } from './team.service';

@Controller()
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @EventPattern('create_team')
  public async create(
    @Payload() payload: CreateTeamBodyDto,
  ): Promise<TeamResponseDto> {
    return (await this.teamService.create(payload)) as TeamResponseDto;
  }

  @EventPattern('find_team_by_initials')
  public async findByInitials(
    @Payload() params: FindTeamByInitialsDto,
  ): Promise<TeamResponseDto | null> {
    const result = await this.teamService.findByInitials(params);
    return (result || null) as TeamResponseDto | null;
  }

  @EventPattern('find_team_all')
  public async findAll(): Promise<ScanResponse<TeamResponseDto>> {
    return (await this.teamService.findAll()) as ScanResponse<TeamResponseDto>;
  }

  @EventPattern('delete_team_by_initials')
  public async delete(
    @Payload() params: DeleteTeamByInitialsDto,
  ): Promise<boolean> {
    return await this.teamService.delete(params);
  }
}
