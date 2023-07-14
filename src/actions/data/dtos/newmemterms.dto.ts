/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:01:19 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} NewmemtermsMongoModel
 */
export type NewmemtermsMongoModel = {
  _id?: MongoDB.ObjectId;
  terms?: string;
  hash?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} NewmemtermsRawModel
 */
export type NewmemtermsRawModel = {
  terms?: string;
  hash?: string;
  dac_id?: string;
  [key: string]: unknown;
};

