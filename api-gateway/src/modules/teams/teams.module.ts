import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { ConfigService } from 'src/config/config.service';
import { TeamsController } from './teams.controller';

@Module({
  imports: [],
  controllers: [TeamsController],
  providers: [
    ConfigService,
    {
      provide: 'TEAM_SERVICE',
      useFactory: (configService: ConfigService) => {
        const teamServiceOptions = configService.get('teamService');
        return ClientProxyFactory.create(teamServiceOptions);
      },
      inject: [ConfigService],
    },
  ],
  exports: ['TEAM_SERVICE'],
})
export class TeamsModule {}
