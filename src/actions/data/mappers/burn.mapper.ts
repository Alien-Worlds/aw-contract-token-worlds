/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Burn  } from "../../domain/entities";
import { BurnMongoModel, BurnRawModel  } from "../dtos/burn.dto";

// Mongo Mappers
export class BurnMongoMapper
  extends MapperImpl<Burn, BurnMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('from', { 
      key: 'from', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('quantity', { 
      key: 'quantity', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

  }

  public toEntity(mongoModel: BurnMongoModel): Burn {
    const { 
      from,
      quantity,
      _id, 
      ...rest
    } = mongoModel;

    return Burn.create(
      from || '',
      new AssetMongoMapper().toEntity(quantity),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class BurnRawMapper
  extends MapperImpl<Burn, BurnRawModel>
{
  public fromEntity(entity: Burn): BurnRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: BurnRawModel): Burn {
    const { 
      from,
      quantity,
      ...rest
    } = rawModel;

    return Burn.create(
      from || '',
      new AssetRawMapper().toEntity(quantity),
      undefined,
      rest
    );
  }
}

