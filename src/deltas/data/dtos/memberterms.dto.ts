/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:52:27 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} MembertermsMongoModel
 */
export type MembertermsMongoModel = {
  _id?: MongoDB.ObjectId;
  terms?: string;
  hash?: string;
  version?: MongoDB.Long;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} MembertermsRawModel
 */
export type MembertermsRawModel = {
  terms?: string;
  hash?: string;
  version?: bigint;
  [key: string]: unknown;
};

