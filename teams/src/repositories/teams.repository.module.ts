import { Module } from '@nestjs/common';
import { TeamRepository } from './team.repository';

@Module({
  providers: [TeamRepository],
  exports: [TeamRepository],
})
export class TeamsRepositoryModule {}
