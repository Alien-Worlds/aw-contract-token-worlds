/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/aw-antelope';

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

