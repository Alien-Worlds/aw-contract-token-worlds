/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:17:23 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} BurnMongoModel
 */
export type BurnMongoModel = {
  _id?: MongoDB.ObjectId;
  from?: string;
  quantity?: AssetMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} BurnRawModel
 */
export type BurnRawModel = {
  from?: string;
  quantity?: AssetRawModel;
  [key: string]: unknown;
};

