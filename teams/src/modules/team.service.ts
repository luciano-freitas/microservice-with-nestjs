import { Injectable } from '@nestjs/common';
import { TeamEntity } from 'src/entities/teams.entity';
import { TeamRepository } from '..//repositories/team.repository';
import { CreateTeamBodyDto, FindTeamByInitialsDto } from './dto';
import { DeleteTeamByInitialsDto } from './dto/delete-team-by-initials.dto';

@Injectable()
export class TeamService {
  constructor(private readonly teamRepository: TeamRepository) {}

  async create(entity: CreateTeamBodyDto) {
    const data: TeamEntity = { ...entity };
    return await this.teamRepository.create(data);
  }

  async findByInitials(params: FindTeamByInitialsDto) {
    return await this.teamRepository.findByOne(params.initials);
  }

  async findAll() {
    return await this.teamRepository.findAll();
  }

  async delete(params: DeleteTeamByInitialsDto) {
    return await this.teamRepository.delete(params.initials);
  }
}
