/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:52:27 GMT
 */


import { 
  Burn,
  Cancel,
  Claimunstkes,
  Close,
  Create,
  Issue,
  Memberreg,
  Memberunreg,
  Newmemterms,
  Stake,
  Stakeconfig,
  Staketime,
  Transfer,
  Unlock,
  Unstake,
} from '../../domain/entities';
import { 
  ContractAction, 
  MapperImpl, 
  parseToBigInt 
} from '@alien-worlds/api-core';

import { BurnMongoMapper, BurnRawMapper } from "./burn.mapper";
import { CancelMongoMapper, CancelRawMapper } from "./cancel.mapper";
import { ClaimunstkesMongoMapper, ClaimunstkesRawMapper } from "./claimunstkes.mapper";
import { CloseMongoMapper, CloseRawMapper } from "./close.mapper";
import { CreateMongoMapper, CreateRawMapper } from "./create.mapper";
import { IssueMongoMapper, IssueRawMapper } from "./issue.mapper";
import { MemberregMongoMapper, MemberregRawMapper } from "./memberreg.mapper";
import { MemberunregMongoMapper, MemberunregRawMapper } from "./memberunreg.mapper";
import { NewmemtermsMongoMapper, NewmemtermsRawMapper } from "./newmemterms.mapper";
import { StakeMongoMapper, StakeRawMapper } from "./stake.mapper";
import { StakeconfigMongoMapper, StakeconfigRawMapper } from "./stakeconfig.mapper";
import { StaketimeMongoMapper, StaketimeRawMapper } from "./staketime.mapper";
import { TransferMongoMapper, TransferRawMapper } from "./transfer.mapper";
import { UnlockMongoMapper, UnlockRawMapper } from "./unlock.mapper";
import { UnstakeMongoMapper, UnstakeRawMapper } from "./unstake.mapper";
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/token-worlds-action';
import { 
  TokenWorldsActionMongoModel,
  TokenWorldsActionRawModel,
  BurnMongoModel,
  BurnRawModel,
  CancelMongoModel,
  CancelRawModel,
  ClaimunstkesMongoModel,
  ClaimunstkesRawModel,
  CloseMongoModel,
  CloseRawModel,
  CreateMongoModel,
  CreateRawModel,
  IssueMongoModel,
  IssueRawModel,
  MemberregMongoModel,
  MemberregRawModel,
  MemberunregMongoModel,
  MemberunregRawModel,
  NewmemtermsMongoModel,
  NewmemtermsRawModel,
  StakeMongoModel,
  StakeRawModel,
  StakeconfigMongoModel,
  StakeconfigRawModel,
  StaketimeMongoModel,
  StaketimeRawModel,
  TransferMongoModel,
  TransferRawModel,
  UnlockMongoModel,
  UnlockRawModel,
  UnstakeMongoModel,
  UnstakeRawModel,
} from '../dtos';
import { TokenWorldsActionName } from '../../domain/enums';

// Mongo Mapper
export class TokenWorldsActionMongoMapper
  extends MapperImpl<ContractAction<DataEntityType, TokenWorldsActionMongoModel>, TokenWorldsActionMongoModel>
{
  public fromEntity(
    entity: ContractAction<DataEntityType, TokenWorldsActionMongoModel>
  ): TokenWorldsActionMongoModel {
    let entityData;
    switch (entity.name) {
      case TokenWorldsActionName.Burn:
        entityData = new BurnMongoMapper().fromEntity(
          entity.data as Burn
        );
        break;
      case TokenWorldsActionName.Cancel:
        entityData = new CancelMongoMapper().fromEntity(
          entity.data as Cancel
        );
        break;
      case TokenWorldsActionName.Claimunstkes:
        entityData = new ClaimunstkesMongoMapper().fromEntity(
          entity.data as Claimunstkes
        );
        break;
      case TokenWorldsActionName.Close:
        entityData = new CloseMongoMapper().fromEntity(
          entity.data as Close
        );
        break;
      case TokenWorldsActionName.Create:
        entityData = new CreateMongoMapper().fromEntity(
          entity.data as Create
        );
        break;
      case TokenWorldsActionName.Issue:
        entityData = new IssueMongoMapper().fromEntity(
          entity.data as Issue
        );
        break;
      case TokenWorldsActionName.Memberreg:
        entityData = new MemberregMongoMapper().fromEntity(
          entity.data as Memberreg
        );
        break;
      case TokenWorldsActionName.Memberunreg:
        entityData = new MemberunregMongoMapper().fromEntity(
          entity.data as Memberunreg
        );
        break;
      case TokenWorldsActionName.Newmemterms:
        entityData = new NewmemtermsMongoMapper().fromEntity(
          entity.data as Newmemterms
        );
        break;
      case TokenWorldsActionName.Stake:
        entityData = new StakeMongoMapper().fromEntity(
          entity.data as Stake
        );
        break;
      case TokenWorldsActionName.Stakeconfig:
        entityData = new StakeconfigMongoMapper().fromEntity(
          entity.data as Stakeconfig
        );
        break;
      case TokenWorldsActionName.Staketime:
        entityData = new StaketimeMongoMapper().fromEntity(
          entity.data as Staketime
        );
        break;
      case TokenWorldsActionName.Transfer:
        entityData = new TransferMongoMapper().fromEntity(
          entity.data as Transfer
        );
        break;
      case TokenWorldsActionName.Unlock:
        entityData = new UnlockMongoMapper().fromEntity(
          entity.data as Unlock
        );
        break;
      case TokenWorldsActionName.Unstake:
        entityData = new UnstakeMongoMapper().fromEntity(
          entity.data as Unstake
        );
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      global_sequence: new MongoDB.Long(entity.globalSequence),
      receiver_sequence: new MongoDB.Long(entity.receiverSequence),
      trx_id: entity.transactionId,
      action: {
        name: entity.name,
        account: entity.account,
        data: entityData,
      },
    };
  }

  public toEntity(
    mongoModel: TokenWorldsActionMongoModel
  ): ContractAction<DataEntityType, TokenWorldsActionMongoModel> {
    let data;
    switch (mongoModel.action.name) {
      case TokenWorldsActionName.Burn:
        data = new BurnMongoMapper().toEntity(
          mongoModel.action.data as BurnMongoModel
        );
        break;
      case TokenWorldsActionName.Cancel:
        data = new CancelMongoMapper().toEntity(
          mongoModel.action.data as CancelMongoModel
        );
        break;
      case TokenWorldsActionName.Claimunstkes:
        data = new ClaimunstkesMongoMapper().toEntity(
          mongoModel.action.data as ClaimunstkesMongoModel
        );
        break;
      case TokenWorldsActionName.Close:
        data = new CloseMongoMapper().toEntity(
          mongoModel.action.data as CloseMongoModel
        );
        break;
      case TokenWorldsActionName.Create:
        data = new CreateMongoMapper().toEntity(
          mongoModel.action.data as CreateMongoModel
        );
        break;
      case TokenWorldsActionName.Issue:
        data = new IssueMongoMapper().toEntity(
          mongoModel.action.data as IssueMongoModel
        );
        break;
      case TokenWorldsActionName.Memberreg:
        data = new MemberregMongoMapper().toEntity(
          mongoModel.action.data as MemberregMongoModel
        );
        break;
      case TokenWorldsActionName.Memberunreg:
        data = new MemberunregMongoMapper().toEntity(
          mongoModel.action.data as MemberunregMongoModel
        );
        break;
      case TokenWorldsActionName.Newmemterms:
        data = new NewmemtermsMongoMapper().toEntity(
          mongoModel.action.data as NewmemtermsMongoModel
        );
        break;
      case TokenWorldsActionName.Stake:
        data = new StakeMongoMapper().toEntity(
          mongoModel.action.data as StakeMongoModel
        );
        break;
      case TokenWorldsActionName.Stakeconfig:
        data = new StakeconfigMongoMapper().toEntity(
          mongoModel.action.data as StakeconfigMongoModel
        );
        break;
      case TokenWorldsActionName.Staketime:
        data = new StaketimeMongoMapper().toEntity(
          mongoModel.action.data as StaketimeMongoModel
        );
        break;
      case TokenWorldsActionName.Transfer:
        data = new TransferMongoMapper().toEntity(
          mongoModel.action.data as TransferMongoModel
        );
        break;
      case TokenWorldsActionName.Unlock:
        data = new UnlockMongoMapper().toEntity(
          mongoModel.action.data as UnlockMongoModel
        );
        break;
      case TokenWorldsActionName.Unstake:
        data = new UnstakeMongoMapper().toEntity(
          mongoModel.action.data as UnstakeMongoModel
        );
        break;
    }

    const {
      _id,
      block_timestamp,
      block_number,
      global_sequence,
      receiver_sequence,
      trx_id,
      action,
    } = mongoModel;

    return new ContractAction<DataEntityType, TokenWorldsActionMongoModel>(
      _id.toString(),
      block_timestamp,
      parseToBigInt(block_number),
      action.account,
      action.name,
      parseToBigInt(global_sequence),
      parseToBigInt(receiver_sequence),
      trx_id,
      data,
    );
  }
}

// Processor Task Mapper
export class TokenWorldsActionProcessorTaskMapper extends MapperImpl<
  ContractAction<DataEntityType, TokenWorldsActionRawModel>,
  TokenWorldsActionRawModel
> {
  public fromEntity(
    entity: ContractAction<DataEntityType, TokenWorldsActionRawModel>
  ): TokenWorldsActionRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: TokenWorldsActionRawModel
  ): ContractAction<DataEntityType, TokenWorldsActionRawModel> {
    let data;
    switch (rawModel.name) {
      case TokenWorldsActionName.Burn:
        data = new BurnRawMapper().toEntity(
          rawModel.data as BurnRawModel
        );
        break;
      case TokenWorldsActionName.Cancel:
        data = new CancelRawMapper().toEntity(
          rawModel.data as CancelRawModel
        );
        break;
      case TokenWorldsActionName.Claimunstkes:
        data = new ClaimunstkesRawMapper().toEntity(
          rawModel.data as ClaimunstkesRawModel
        );
        break;
      case TokenWorldsActionName.Close:
        data = new CloseRawMapper().toEntity(
          rawModel.data as CloseRawModel
        );
        break;
      case TokenWorldsActionName.Create:
        data = new CreateRawMapper().toEntity(
          rawModel.data as CreateRawModel
        );
        break;
      case TokenWorldsActionName.Issue:
        data = new IssueRawMapper().toEntity(
          rawModel.data as IssueRawModel
        );
        break;
      case TokenWorldsActionName.Memberreg:
        data = new MemberregRawMapper().toEntity(
          rawModel.data as MemberregRawModel
        );
        break;
      case TokenWorldsActionName.Memberunreg:
        data = new MemberunregRawMapper().toEntity(
          rawModel.data as MemberunregRawModel
        );
        break;
      case TokenWorldsActionName.Newmemterms:
        data = new NewmemtermsRawMapper().toEntity(
          rawModel.data as NewmemtermsRawModel
        );
        break;
      case TokenWorldsActionName.Stake:
        data = new StakeRawMapper().toEntity(
          rawModel.data as StakeRawModel
        );
        break;
      case TokenWorldsActionName.Stakeconfig:
        data = new StakeconfigRawMapper().toEntity(
          rawModel.data as StakeconfigRawModel
        );
        break;
      case TokenWorldsActionName.Staketime:
        data = new StaketimeRawMapper().toEntity(
          rawModel.data as StaketimeRawModel
        );
        break;
      case TokenWorldsActionName.Transfer:
        data = new TransferRawMapper().toEntity(
          rawModel.data as TransferRawModel
        );
        break;
      case TokenWorldsActionName.Unlock:
        data = new UnlockRawMapper().toEntity(
          rawModel.data as UnlockRawModel
        );
        break;
      case TokenWorldsActionName.Unstake:
        data = new UnstakeRawMapper().toEntity(
          rawModel.data as UnstakeRawModel
        );
        break;
    }

    const {
      account,
      name,
      block_timestamp,
      block_number,
      global_sequence,
      recv_sequence,
      transaction_id,
    } = rawModel;

    return new ContractAction<DataEntityType, TokenWorldsActionRawModel>(
      '',
      block_timestamp,
      parseToBigInt(block_number),
      account,
      name,
      parseToBigInt(global_sequence),
      parseToBigInt(recv_sequence),
      transaction_id,
      data
    );
  }
}
