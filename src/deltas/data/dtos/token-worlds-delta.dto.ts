/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:49:54 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { AccountsMongoModel } from './accounts.dto';
import { MembersMongoModel } from './members.dto';
import { MembertermsMongoModel } from './memberterms.dto';
import { StakeconfigMongoModel } from './stakeconfig.dto';
import { StakesMongoModel } from './stakes.dto';
import { StaketimeMongoModel } from './staketime.dto';
import { StatMongoModel } from './stat.dto';
import { UnstakesMongoModel } from './unstakes.dto';

export type DataDocumentType =
  | AccountsMongoModel
  | MembersMongoModel
  | MembertermsMongoModel
  | StakeconfigMongoModel
  | StakesMongoModel
  | StaketimeMongoModel
  | StatMongoModel
  | UnstakesMongoModel;


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
