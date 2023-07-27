/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} MemberregMongoModel
 */
export type MemberregMongoModel = {
  _id?: MongoDB.ObjectId;
  sender?: string;
  agreedterms?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} MemberregRawModel
 */
export type MemberregRawModel = {
  sender?: string;
  agreedterms?: string;
  dac_id?: string;
  [key: string]: unknown;
};

