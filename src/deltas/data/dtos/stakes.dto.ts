/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 07:20:11 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} StakesMongoModel
 */
export type StakesMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  stake?: AssetMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} StakesRawModel
 */
export type StakesRawModel = {
  account?: string;
  stake?: AssetRawModel;
  [key: string]: unknown;
};

