/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 16:44:34 GMT
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

