/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/aw-antelope';
import { Stakes  } from "../../domain/entities";
import { StakesMongoModel, StakesRawModel  } from "../dtos/stakes.dto";

// Mongo Mappers
export class StakesMongoMapper
  extends MongoMapper<Stakes, StakesMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('stake', { 
      key: 'stake', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

  }

  public toEntity(mongoModel: StakesMongoModel): Stakes {
    const { 
      account,
      stake,
      _id,
      ...rest
    } = mongoModel;

    return Stakes.create(
      account || '',
      stake ? new AssetMongoMapper().toEntity(stake) : Asset.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class StakesRawMapper
  extends MapperImpl<Stakes, StakesRawModel>
{
  public fromEntity(entity: Stakes): StakesRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: StakesRawModel): Stakes {
    const { 
      account,
      stake,
      ...rest
    } = rawModel;

    return Stakes.create(
      account || '',
      stake ? new AssetRawMapper().toEntity(stake) : Asset.getDefault(),
      undefined,
      rest
    );
  }
}

