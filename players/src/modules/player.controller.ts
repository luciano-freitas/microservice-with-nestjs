import { Controller, Get, Injectable } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import {
  FindPlayerByIdDto,
  DeletePlayerByIdDto,
  CreatePlayerBodyDto,
} from './dto/';
import { PlayerService } from './player.service';

@Controller()
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @EventPattern('create_player')
  public async create(@Payload() payload: CreatePlayerBodyDto) {
    const result = await this.playerService.create(payload);
    console.log('Cadastro realizado:', result);
  }

  @MessagePattern('find_player_by_id')
  public async findById(@Payload('id') _id: FindPlayerByIdDto) {
    return await this.playerService.findById(_id);
  }

  @MessagePattern('find_player_all')
  public async findAll() {
    return await this.playerService.findAll();
  }

  @EventPattern('delete_player_by_id')
  public async delete(@Payload('id') _id: DeletePlayerByIdDto) {
    return await this.playerService.deleteById(_id);
  }
}
