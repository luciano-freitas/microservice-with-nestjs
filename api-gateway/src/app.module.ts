import { Module } from '@nestjs/common';
import { PlayersModule } from './modules/players/players.module';
import { TeamsModule } from './modules/teams/teams.module';

@Module({
  imports: [PlayersModule, TeamsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
