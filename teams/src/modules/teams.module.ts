import { Module } from '@nestjs/common';
import { TeamsRepositoryModule } from '../repositories/teams.repository.module';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

@Module({
  imports: [TeamsRepositoryModule],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamsModule {}
