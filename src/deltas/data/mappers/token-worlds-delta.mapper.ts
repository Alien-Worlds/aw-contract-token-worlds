/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import {
  Accounts,
  Members,
  Memberterms,
  Stakeconfig,
  Stakes,
  Staketime,
  Stat,
  Unstakes,
} from '../../domain/entities';
import {
  ContractDelta,
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { DataEntityType } from '../../domain/entities/token-worlds-delta';
import { TokenWorldsDeltaMongoModel, TokenWorldsDeltaRawModel } from '../dtos';
import { TokenWorldsTableName } from '../../domain/enums';
import { AccountsMongoMapper, AccountsRawMapper } from './accounts.mapper';
import { MembersMongoMapper, MembersRawMapper } from './members.mapper';
import {
  MembertermsMongoMapper,
  MembertermsRawMapper,
} from './memberterms.mapper';
import {
  StakeconfigMongoMapper,
  StakeconfigRawMapper,
} from './stakeconfig.mapper';
import { StakesMongoMapper, StakesRawMapper } from './stakes.mapper';
import { StaketimeMongoMapper, StaketimeRawMapper } from './staketime.mapper';
import { StatMongoMapper, StatRawMapper } from './stat.mapper';
import { UnstakesMongoMapper, UnstakesRawMapper } from './unstakes.mapper';

// Mongo Mapper
export class TokenWorldsDeltaMongoMapper extends MongoMapper<
  ContractDelta<DataEntityType>,
  TokenWorldsDeltaMongoModel
> {
  public fromEntity(
    entity: ContractDelta<DataEntityType>
  ): TokenWorldsDeltaMongoModel {
    let entityData;
    switch (entity.table) {
      case TokenWorldsTableName.Accounts:
        entityData = new AccountsMongoMapper().fromEntity(
          entity.data as Accounts
        );
        break;
      case TokenWorldsTableName.Members:
        entityData = new MembersMongoMapper().fromEntity(
          entity.data as Members
        );
        break;
      case TokenWorldsTableName.Memberterms:
        entityData = new MembertermsMongoMapper().fromEntity(
          entity.data as Memberterms
        );
        break;
      case TokenWorldsTableName.Stakeconfig:
        entityData = new StakeconfigMongoMapper().fromEntity(
          entity.data as Stakeconfig
        );
        break;
      case TokenWorldsTableName.Stakes:
        entityData = new StakesMongoMapper().fromEntity(entity.data as Stakes);
        break;
      case TokenWorldsTableName.Staketime:
        entityData = new StaketimeMongoMapper().fromEntity(
          entity.data as Staketime
        );
        break;
      case TokenWorldsTableName.Stat:
        entityData = new StatMongoMapper().fromEntity(entity.data as Stat);
        break;
      case TokenWorldsTableName.Unstakes:
        entityData = new UnstakesMongoMapper().fromEntity(
          entity.data as Unstakes
        );
        break;
    }

    const model: TokenWorldsDeltaMongoModel = {
      block_timestamp: entity.blockTimestamp,
      block_num: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
      data: entityData,
      payer: entity.payer,
      primary_key: new MongoDB.Long(entity.primaryKey),
      present: entity.present,
    };

    if (entity.id && MongoDB.ObjectId.isValid(entity.id)) {
      model._id = new MongoDB.ObjectId(entity.id);
    }

    return model;
  }

  public toEntity(
    mongoModel: TokenWorldsDeltaMongoModel
  ): ContractDelta<DataEntityType> {
    let data;
    switch (mongoModel.table) {
      case TokenWorldsTableName.Accounts:
        data = new AccountsMongoMapper().toEntity(mongoModel.data);
        break;
      case TokenWorldsTableName.Members:
        data = new MembersMongoMapper().toEntity(mongoModel.data);
        break;
      case TokenWorldsTableName.Memberterms:
        data = new MembertermsMongoMapper().toEntity(mongoModel.data);
        break;
      case TokenWorldsTableName.Stakeconfig:
        data = new StakeconfigMongoMapper().toEntity(mongoModel.data);
        break;
      case TokenWorldsTableName.Stakes:
        data = new StakesMongoMapper().toEntity(mongoModel.data);
        break;
      case TokenWorldsTableName.Staketime:
        data = new StaketimeMongoMapper().toEntity(mongoModel.data);
        break;
      case TokenWorldsTableName.Stat:
        data = new StatMongoMapper().toEntity(mongoModel.data);
        break;
      case TokenWorldsTableName.Unstakes:
        data = new UnstakesMongoMapper().toEntity(mongoModel.data);
        break;
    }

    const {
      _id,
      block_num,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = mongoModel;

    return new ContractDelta<DataEntityType>(
      _id.toString(),
      parseToBigInt(block_num),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp
    );
  }
}

// Processor Task Mapper
export class TokenWorldsDeltaProcessorTaskMapper extends MapperImpl<
  ContractDelta<DataEntityType, TokenWorldsDeltaRawModel>,
  TokenWorldsDeltaRawModel
> {
  public fromEntity(
    entity: ContractDelta<DataEntityType, TokenWorldsDeltaRawModel>
  ): TokenWorldsDeltaRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: TokenWorldsDeltaRawModel
  ): ContractDelta<DataEntityType, TokenWorldsDeltaRawModel> {
    let data;
    switch (rawModel.table) {
      case TokenWorldsTableName.Accounts:
        data = new AccountsRawMapper().toEntity(rawModel.data);
        break;
      case TokenWorldsTableName.Members:
        data = new MembersRawMapper().toEntity(rawModel.data);
        break;
      case TokenWorldsTableName.Memberterms:
        data = new MembertermsRawMapper().toEntity(rawModel.data);
        break;
      case TokenWorldsTableName.Stakeconfig:
        data = new StakeconfigRawMapper().toEntity(rawModel.data);
        break;
      case TokenWorldsTableName.Stakes:
        data = new StakesRawMapper().toEntity(rawModel.data);
        break;
      case TokenWorldsTableName.Staketime:
        data = new StaketimeRawMapper().toEntity(rawModel.data);
        break;
      case TokenWorldsTableName.Stat:
        data = new StatRawMapper().toEntity(rawModel.data);
        break;
      case TokenWorldsTableName.Unstakes:
        data = new UnstakesRawMapper().toEntity(rawModel.data);
        break;
    }

    const {
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = rawModel;

    return new ContractDelta<DataEntityType, TokenWorldsDeltaRawModel>(
      '',
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp
    );
  }
}
