/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:20 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} MembersMongoModel
 */
export type MembersMongoModel = {
  _id?: MongoDB.ObjectId;
  sender?: string;
  agreedtermsversion?: MongoDB.Long;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} MembersRawModel
 */
export type MembersRawModel = {
  sender?: string;
  agreedtermsversion?: bigint;
  [key: string]: unknown;
};

