/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

import { BurnMongoModel, BurnRawModel } from './burn.dto';
import { CancelMongoModel, CancelRawModel } from './cancel.dto';
import {
  ClaimunstkesMongoModel,
  ClaimunstkesRawModel,
} from './claimunstkes.dto';
import { CloseMongoModel, CloseRawModel } from './close.dto';
import { CreateMongoModel, CreateRawModel } from './create.dto';
import { IssueMongoModel, IssueRawModel } from './issue.dto';
import { MemberregMongoModel, MemberregRawModel } from './memberreg.dto';
import { MemberunregMongoModel, MemberunregRawModel } from './memberunreg.dto';
import { NewmemtermsMongoModel, NewmemtermsRawModel } from './newmemterms.dto';
import { StakeMongoModel, StakeRawModel } from './stake.dto';
import { StakeconfigMongoModel, StakeconfigRawModel } from './stakeconfig.dto';
import { StaketimeMongoModel, StaketimeRawModel } from './staketime.dto';
import { TransferMongoModel, TransferRawModel } from './transfer.dto';
import { UnlockMongoModel, UnlockRawModel } from './unlock.dto';
import { UnstakeMongoModel, UnstakeRawModel } from './unstake.dto';

export type DataDocumentType =
  | BurnMongoModel
  | CancelMongoModel
  | ClaimunstkesMongoModel
  | CloseMongoModel
  | CreateMongoModel
  | IssueMongoModel
  | MemberregMongoModel
  | MemberunregMongoModel
  | NewmemtermsMongoModel
  | StakeMongoModel
  | StakeconfigMongoModel
  | StaketimeMongoModel
  | TransferMongoModel
  | UnlockMongoModel
  | UnstakeMongoModel;

export type DataRawType =
  | BurnRawModel
  | CancelRawModel
  | ClaimunstkesRawModel
  | CloseRawModel
  | CreateRawModel
  | IssueRawModel
  | MemberregRawModel
  | MemberunregRawModel
  | NewmemtermsRawModel
  | StakeRawModel
  | StakeconfigRawModel
  | StaketimeRawModel
  | TransferRawModel
  | UnlockRawModel
  | UnstakeRawModel;

export type TokenWorldsActionMongoModel = {
  _id?: MongoDB.ObjectId;
  block_timestamp?: Date;
  block_num?: MongoDB.Long;
  global_sequence?: MongoDB.Long;
  recv_sequence?: MongoDB.Long;
  trx_id?: string;
  action_hash?: string;
  action?: {
    account: string;
    name: string;
    data: DataDocumentType;
  };
};

export type TokenWorldsActionRawModel = {
  account: string;
  name: string;
  block_timestamp: Date;
  block_number: string;
  global_sequence: string;
  recv_sequence: string;
  transaction_id: string;
  data: DataRawType;
  [key: string]: unknown;
};
