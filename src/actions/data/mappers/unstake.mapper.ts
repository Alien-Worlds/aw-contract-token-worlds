/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Unstake  } from "../../domain/entities";
import { UnstakeMongoModel, UnstakeRawModel  } from "../dtos/unstake.dto";

// Mongo Mappers
export class UnstakeMongoMapper
  extends MapperImpl<Unstake, UnstakeMongoModel>
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

  public toEntity(mongoModel: UnstakeMongoModel): Unstake {
    const { 
      account,
      quantity,
      _id, 
      ...rest
    } = mongoModel;

    return Unstake.create(
      account || '',
      new AssetMongoMapper().toEntity(quantity),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UnstakeRawMapper
  extends MapperImpl<Unstake, UnstakeRawModel>
{
  public fromEntity(entity: Unstake): UnstakeRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UnstakeRawModel): Unstake {
    const { 
      account,
      quantity,
      ...rest
    } = rawModel;

    return Unstake.create(
      account || '',
      new AssetRawMapper().toEntity(quantity),
      undefined,
      rest
    );
  }
}

