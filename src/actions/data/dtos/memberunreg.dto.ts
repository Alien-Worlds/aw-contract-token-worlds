/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} MemberunregMongoModel
 */
export type MemberunregMongoModel = {
  _id?: MongoDB.ObjectId;
  sender?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} MemberunregRawModel
 */
export type MemberunregRawModel = {
  sender?: string;
  dac_id?: string;
  [key: string]: unknown;
};

