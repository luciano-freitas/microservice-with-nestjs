import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { ConfigService } from 'src/config/config.service';
import { PlayersController } from './players.controller';

@Module({
  imports: [],
  controllers: [PlayersController],
  providers: [
    ConfigService,
    {
      provide: 'PLAYER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const playerServiceOptions = configService.get('playerService');
        return ClientProxyFactory.create(playerServiceOptions);
      },
      inject: [ConfigService],
    },
  ],
  exports: ['PLAYER_SERVICE'],
})
export class PlayersModule {}
