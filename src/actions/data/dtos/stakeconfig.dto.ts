/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:20 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { SymbolMongoModel, SymbolRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} StakeconfigMongoModel
 */
export type StakeconfigMongoModel = {
  _id?: MongoDB.ObjectId;
  config?: StakeConfigMongoModel;
  token_symbol?: SymbolMongoModel;
  [key: string]: unknown;
};

/**
 * @typedef {Object} StakeConfigMongoModel
 */
export type StakeConfigMongoModel = {
  _id?: MongoDB.ObjectId;
  enabled?: boolean;
  min_stake_time?: number;
  max_stake_time?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} StakeconfigRawModel
 */
export type StakeconfigRawModel = {
  config?: StakeConfigRawModel;
  token_symbol?: SymbolRawModel;
  [key: string]: unknown;
};

/**
 * @typedef {Object} StakeConfigRawModel
 */
export type StakeConfigRawModel = {
  enabled?: boolean;
  min_stake_time?: number;
  max_stake_time?: number;
  [key: string]: unknown;
};

