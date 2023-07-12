/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { SymbolMongoModel, SymbolRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ClaimunstkesMongoModel
 */
export type ClaimunstkesMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  token_symbol?: SymbolMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ClaimunstkesRawModel
 */
export type ClaimunstkesRawModel = {
  account?: string;
  token_symbol?: SymbolRawModel;
  [key: string]: unknown;
};

