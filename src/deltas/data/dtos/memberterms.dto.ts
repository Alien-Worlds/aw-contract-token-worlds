/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
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
  version?: number;
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
  version?: number;
  [key: string]: unknown;
};

