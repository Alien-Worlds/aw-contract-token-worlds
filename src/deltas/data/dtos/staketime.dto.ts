/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

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

