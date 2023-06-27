/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 16:44:34 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

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

