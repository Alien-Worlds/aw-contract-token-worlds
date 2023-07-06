/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:11:52 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} UnstakeMongoModel
 */
export type UnstakeMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  quantity?: AssetMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} UnstakeRawModel
 */
export type UnstakeRawModel = {
  account?: string;
  quantity?: AssetRawModel;
  [key: string]: unknown;
};

