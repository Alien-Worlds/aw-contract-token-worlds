/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:52:27 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { SymbolMongoModel, SymbolRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} StaketimeMongoModel
 */
export type StaketimeMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  unstake_time?: number;
  token_symbol?: SymbolMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} StaketimeRawModel
 */
export type StaketimeRawModel = {
  account?: string;
  unstake_time?: number;
  token_symbol?: SymbolRawModel;
  [key: string]: unknown;
};

