/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/aw-antelope';
import { Unlock  } from "../../domain/entities";
import { UnlockMongoModel, UnlockRawModel  } from "../dtos/unlock.dto";

// Mongo Mappers
export class UnlockMongoMapper
  extends MongoMapper<Unlock, UnlockMongoModel>
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
      unlock ? new AssetMongoMapper().toEntity(unlock) : Asset.getDefault(),
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
      unlock ? new AssetRawMapper().toEntity(unlock) : Asset.getDefault(),
      undefined,
      rest
    );
  }
}

