/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/aw-antelope';
import { Stake  } from "../../domain/entities";
import { StakeMongoModel, StakeRawModel  } from "../dtos/stake.dto";

// Mongo Mappers
export class StakeMongoMapper
  extends MongoMapper<Stake, StakeMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('quantity', { 
      key: 'quantity', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

  }

  public toEntity(mongoModel: StakeMongoModel): Stake {
    const { 
      account,
      quantity,
      _id,
      ...rest
    } = mongoModel;

    return Stake.create(
      account || '',
      quantity ? new AssetMongoMapper().toEntity(quantity) : Asset.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class StakeRawMapper
  extends MapperImpl<Stake, StakeRawModel>
{
  public fromEntity(entity: Stake): StakeRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: StakeRawModel): Stake {
    const { 
      account,
      quantity,
      ...rest
    } = rawModel;

    return Stake.create(
      account || '',
      quantity ? new AssetRawMapper().toEntity(quantity) : Asset.getDefault(),
      undefined,
      rest
    );
  }
}

