/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:50:21 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { BurnMongoModel } from './burn.dto';
import { CancelMongoModel } from './cancel.dto';
import { ClaimunstkesMongoModel } from './claimunstkes.dto';
import { CloseMongoModel } from './close.dto';
import { CreateMongoModel } from './create.dto';
import { IssueMongoModel } from './issue.dto';
import { MemberregMongoModel } from './memberreg.dto';
import { MemberunregMongoModel } from './memberunreg.dto';
import { NewmemtermsMongoModel } from './newmemterms.dto';
import { StakeMongoModel } from './stake.dto';
import { StakeconfigMongoModel } from './stakeconfig.dto';
import { StaketimeMongoModel } from './staketime.dto';
import { TransferMongoModel } from './transfer.dto';
import { UnlockMongoModel } from './unlock.dto';
import { UnstakeMongoModel } from './unstake.dto';

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

export type TokenWorldsActionMongoModel = {
  _id?: MongoDB.ObjectId;
  block_timestamp?: Date;
  block_number?: MongoDB.Long;
  global_sequence?: MongoDB.Long;
  receiver_sequence?: MongoDB.Long;
  trx_id?: string;
  action_hash?: string;
  action?: {
    account: string;
    name: string;
    data: DataDocumentType;
  };
};

