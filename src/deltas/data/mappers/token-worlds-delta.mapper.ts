/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:50:21 GMT
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
import { ContractDelta, MapperImpl, parseToBigInt } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/token-worlds-delta';
import { TokenWorldsDeltaMongoModel } from '../dtos';
import { TokenWorldsTableName } from '../../domain/enums';
import { AccountsMongoMapper } from "./accounts.mapper";
import { MembersMongoMapper } from "./members.mapper";
import { MembertermsMongoMapper } from "./memberterms.mapper";
import { StakeconfigMongoMapper } from "./stakeconfig.mapper";
import { StakesMongoMapper } from "./stakes.mapper";
import { StaketimeMongoMapper } from "./staketime.mapper";
import { StatMongoMapper } from "./stat.mapper";
import { UnstakesMongoMapper } from "./unstakes.mapper";

export class TokenWorldsDeltaMongoMapper
  extends MapperImpl<ContractDelta<DataEntityType, TokenWorldsDeltaMongoModel>, TokenWorldsDeltaMongoModel>
{
  public fromEntity(
    entity: ContractDelta<DataEntityType, TokenWorldsDeltaMongoModel>
  ): TokenWorldsDeltaMongoModel {
    let entityData;
    switch (entity.table) {
      case TokenWorldsTableName.Accounts:
        entityData = new AccountsMongoMapper().fromEntity(entity.delta as Accounts);
        break;
      case TokenWorldsTableName.Members:
        entityData = new MembersMongoMapper().fromEntity(entity.delta as Members);
        break;
      case TokenWorldsTableName.Memberterms:
        entityData = new MembertermsMongoMapper().fromEntity(entity.delta as Memberterms);
        break;
      case TokenWorldsTableName.Stakeconfig:
        entityData = new StakeconfigMongoMapper().fromEntity(entity.delta as Stakeconfig);
        break;
      case TokenWorldsTableName.Stakes:
        entityData = new StakesMongoMapper().fromEntity(entity.delta as Stakes);
        break;
      case TokenWorldsTableName.Staketime:
        entityData = new StaketimeMongoMapper().fromEntity(entity.delta as Staketime);
        break;
      case TokenWorldsTableName.Stat:
        entityData = new StatMongoMapper().fromEntity(entity.delta as Stat);
        break;
      case TokenWorldsTableName.Unstakes:
        entityData = new UnstakesMongoMapper().fromEntity(entity.delta as Unstakes);
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
      data_hash: entity.deltaHash,
      data: entityData,
      payer: entity.payer,
      primary_key: new MongoDB.Long(entity.primaryKey),
      present: entity.present,
    };
  }

  public toEntity(
    mongoModel: TokenWorldsDeltaMongoModel
  ): ContractDelta<DataEntityType, TokenWorldsDeltaMongoModel> {
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
      block_number,
      code,
      scope,
      table,
      data_hash,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = mongoModel;

    return new ContractDelta<DataEntityType, TokenWorldsDeltaMongoModel>(
      _id.toString(),
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data_hash,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp,
    );
  }
}