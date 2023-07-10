/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 07:20:11 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { SymbolMongoModel, SymbolRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} CancelMongoModel
 */
export type CancelMongoModel = {
  _id?: MongoDB.ObjectId;
  unstake_id?: MongoDB.Long;
  token_symbol?: SymbolMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} CancelRawModel
 */
export type CancelRawModel = {
  unstake_id?: bigint;
  token_symbol?: SymbolRawModel;
  [key: string]: unknown;
};

