/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:59:46 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} IssueMongoModel
 */
export type IssueMongoModel = {
  _id?: MongoDB.ObjectId;
  to?: string;
  quantity?: AssetMongoModel;
  memo?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} IssueRawModel
 */
export type IssueRawModel = {
  to?: string;
  quantity?: AssetRawModel;
  memo?: string;
  [key: string]: unknown;
};

