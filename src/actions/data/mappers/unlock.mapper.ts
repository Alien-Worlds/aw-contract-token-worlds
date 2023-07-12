/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Unlock  } from "../../domain/entities";
import { UnlockMongoModel, UnlockRawModel  } from "../dtos/unlock.dto";

// Mongo Mappers
export class UnlockMongoMapper
  extends MapperImpl<Unlock, UnlockMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('unlock', { 
      key: 'unlock', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

  }

  public toEntity(mongoModel: UnlockMongoModel): Unlock {
    const { 
      unlock,
      _id, 
      ...rest
    } = mongoModel;

    return Unlock.create(
      new AssetMongoMapper().toEntity(unlock),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UnlockRawMapper
  extends MapperImpl<Unlock, UnlockRawModel>
{
  public fromEntity(entity: Unlock): UnlockRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UnlockRawModel): Unlock {
    const { 
      unlock,
      ...rest
    } = rawModel;

    return Unlock.create(
      new AssetRawMapper().toEntity(unlock),
      undefined,
      rest
    );
  }
}

