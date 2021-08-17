import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';
import { PlayerController } from './modules/player.controller';
import { PlayerService } from './modules/player.service';
import { PlayerSchema } from './schemas/player.schema';

@Module({
  controllers: [PlayerController],
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:example@localhost:27017/test?authSource=admin&readPreference=primary&ssl=false',
    ),
    MongooseModule.forFeature([
      {
        name: 'Player',
        schema: PlayerSchema,
      },
    ]),
  ],
  providers: [
    PlayerService,
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
})
export class AppModule {}
