/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:49:54 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} StaketimeMongoModel
 */
export type StaketimeMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  delay?: number;
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
  delay?: number;
  [key: string]: unknown;
};

