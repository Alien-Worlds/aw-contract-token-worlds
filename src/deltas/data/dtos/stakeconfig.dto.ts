/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} StakeconfigMongoModel
 */
export type StakeconfigMongoModel = {
  _id?: MongoDB.ObjectId;
  enabled?: boolean;
  min_stake_time?: number;
  max_stake_time?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} StakeconfigRawModel
 */
export type StakeconfigRawModel = {
  enabled?: boolean;
  min_stake_time?: number;
  max_stake_time?: number;
  [key: string]: unknown;
};

