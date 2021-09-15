import { Module } from '@nestjs/common';
import { TeamsModule } from './modules/teams.module';

@Module({
  imports: [TeamsModule],
  providers: [],
})
export class AppModule {}
