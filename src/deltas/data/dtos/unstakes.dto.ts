/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 16:44:35 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} UnstakesMongoModel
 */
export type UnstakesMongoModel = {
  _id?: MongoDB.ObjectId;
  key?: MongoDB.Long;
  account?: string;
  stake?: AssetMongoModel;
  release_time?: Date;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} UnstakesRawModel
 */
export type UnstakesRawModel = {
  key?: bigint;
  account?: string;
  stake?: AssetRawModel;
  release_time?: Date;
  [key: string]: unknown;
};

