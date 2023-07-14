/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:17:23 GMT
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
  agreedtermsversion?: number;
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
  agreedtermsversion?: number;
  [key: string]: unknown;
};

