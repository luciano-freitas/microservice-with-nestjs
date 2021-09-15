import { Injectable } from '@nestjs/common';
import { TeamEntity } from '../entities/teams.entity';
import { TeamSchema } from './team.shema.repository';
import { ScanResponse } from 'dynamoose/dist/DocumentRetriever';

export declare type KeyObject = {
  [attribute: string]: string | number;
};
export declare type ModelKey = string | KeyObject;

@Injectable()
export class TeamRepository {
  async create(entity: TeamEntity): Promise<TeamEntity> {
    const document = new TeamSchema(entity);

    try {
      const result = await document.save({
        overwrite: false,
        return: 'document',
      });

      return result as unknown as TeamEntity;
    } catch (e) {
      console.log('Erro na hora de tentar criar: ', e);
      return null;
    }
  }

  async findByOne(key: string): Promise<TeamEntity> {
    const keys: ModelKey = {
      initials: key,
    };

    try {
      return TeamSchema.get(keys);
    } catch (e) {
      console.log(`Erro na hora de buscar o time: [${key}]`, e);
      return null;
    }
  }

  async findAll(): Promise<ScanResponse<TeamEntity>> {
    try {
      return TeamSchema.scan().exec();
    } catch (e) {
      console.log('Erro na hora de listar todos os times', e);
      return null;
    }
  }

  async delete(key: string): Promise<boolean> {
    const keys: ModelKey = {
      initials: key,
    };

    try {
      const document = await TeamSchema.get(keys);
      await document.delete();
      return true;
    } catch (e) {
      console.log(`Erro na hora de deletar o time: [${key}]`, e);
      return false;
    }
  }
}
