/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:50:21 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

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

