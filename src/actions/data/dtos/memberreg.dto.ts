/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

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

