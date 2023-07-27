/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

import { AccountsMongoModel, AccountsRawModel } from './accounts.dto';
import { MembersMongoModel, MembersRawModel } from './members.dto';
import { MembertermsMongoModel, MembertermsRawModel } from './memberterms.dto';
import { StakeconfigMongoModel, StakeconfigRawModel } from './stakeconfig.dto';
import { StakesMongoModel, StakesRawModel } from './stakes.dto';
import { StaketimeMongoModel, StaketimeRawModel } from './staketime.dto';
import { StatMongoModel, StatRawModel } from './stat.dto';
import { UnstakesMongoModel, UnstakesRawModel } from './unstakes.dto';

export type DataDocumentType =
  | AccountsMongoModel
  | MembersMongoModel
  | MembertermsMongoModel
  | StakeconfigMongoModel
  | StakesMongoModel
  | StaketimeMongoModel
  | StatMongoModel
  | UnstakesMongoModel;

export type DataRawType =
  | AccountsRawModel
  | MembersRawModel
  | MembertermsRawModel
  | StakeconfigRawModel
  | StakesRawModel
  | StaketimeRawModel
  | StatRawModel
  | UnstakesRawModel;


export type TokenWorldsDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  block_number?: MongoDB.Long;
  code?: string;
  scope?: string;
  table?: string;
  data_hash?: string;
  data?: DataDocumentType;
  payer?: string;
  primary_key?: MongoDB.Long,
  present?: boolean;
  block_timestamp?: Date;
};

export type TokenWorldsDeltaRawModel = {
  block_timestamp: Date;
  block_number: string;
  code: string;
  scope: string;
  table: string;
  payer: string;
  primary_key: string;
  present: boolean;
  data: DataRawType;
};
