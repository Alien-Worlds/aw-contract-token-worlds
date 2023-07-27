/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/aw-antelope';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} StatMongoModel
 */
export type StatMongoModel = {
  _id?: MongoDB.ObjectId;
  supply?: AssetMongoModel;
  max_supply?: AssetMongoModel;
  issuer?: string;
  transfer_locked?: boolean;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} StatRawModel
 */
export type StatRawModel = {
  supply?: AssetRawModel;
  max_supply?: AssetRawModel;
  issuer?: string;
  transfer_locked?: boolean;
  [key: string]: unknown;
};

