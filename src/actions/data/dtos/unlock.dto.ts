/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:52:27 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} UnlockMongoModel
 */
export type UnlockMongoModel = {
  _id?: MongoDB.ObjectId;
  unlock?: AssetMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} UnlockRawModel
 */
export type UnlockRawModel = {
  unlock?: AssetRawModel;
  [key: string]: unknown;
};

