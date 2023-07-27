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
 * @typedef {Object} UnstakesMongoModel
 */
export type UnstakesMongoModel = {
  _id?: MongoDB.ObjectId;
  key?: number;
  account?: string;
  stake?: AssetMongoModel;
  release_time?: Date;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} UnstakesRawModel
 */
export type UnstakesRawModel = {
  key?: number;
  account?: string;
  stake?: AssetRawModel;
  release_time?: Date;
  [key: string]: unknown;
};

