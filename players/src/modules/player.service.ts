import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IPlayer, IPlayerDocument } from '../interfaces/player.interface';
import { CreatePlayerBodyDto } from './dto/create-player-body.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel('Player') private readonly playerModel: Model<IPlayerDocument>,
  ) {}

  public async create(data: CreatePlayerBodyDto): Promise<IPlayerDocument> {
    const player = {
      ...data,
    };

    const userModel = new this.playerModel(player);
    return await userModel.save();
  }

  public async findById(_id): Promise<IPlayer> {
    return await this.playerModel.findById(Types.ObjectId(_id));
  }

  public async findAll(): Promise<IPlayer[]> {
    return await this.playerModel.find().exec();
  }

  public async deleteById(_id): Promise<void> {
    await this.playerModel.deleteOne({ _id });
  }
}
