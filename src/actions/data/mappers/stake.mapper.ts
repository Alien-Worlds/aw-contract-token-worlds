/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Stake  } from "../../domain/entities";
import { StakeMongoModel, StakeRawModel  } from "../dtos/stake.dto";

// Mongo Mappers
export class StakeMongoMapper
  extends MapperImpl<Stake, StakeMongoModel>
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
      new AssetMongoMapper().toEntity(quantity),
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
      new AssetRawMapper().toEntity(quantity),
      undefined,
      rest
    );
  }
}

