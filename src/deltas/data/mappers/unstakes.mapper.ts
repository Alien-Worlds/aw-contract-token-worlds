/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Unstakes  } from "../../domain/entities";
import { UnstakesMongoModel, UnstakesRawModel  } from "../dtos/unstakes.dto";

// Mongo Mappers
export class UnstakesMongoMapper
  extends MapperImpl<Unstakes, UnstakesMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('key', { 
      key: 'key', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('stake', { 
      key: 'stake', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('releaseTime', { 
      key: 'release_time', 
      mapper: (value: Date) => value,
    });

  }

  public toEntity(mongoModel: UnstakesMongoModel): Unstakes {
    const { 
      key,
      account,
      stake,
      release_time,
      _id, 
      ...rest
    } = mongoModel;

    return Unstakes.create(
      key || 0,
      account || '',
      new AssetMongoMapper().toEntity(stake),
      release_time || new Date(0),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UnstakesRawMapper
  extends MapperImpl<Unstakes, UnstakesRawModel>
{
  public fromEntity(entity: Unstakes): UnstakesRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UnstakesRawModel): Unstakes {
    const { 
      key,
      account,
      stake,
      release_time,
      ...rest
    } = rawModel;

    return Unstakes.create(
      key || 0,
      account || '',
      new AssetRawMapper().toEntity(stake),
      release_time || new Date(0),
      undefined,
      rest
    );
  }
}

