/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Stat  } from "../../domain/entities";
import { StatMongoModel, StatRawModel  } from "../dtos/stat.dto";

// Mongo Mappers
export class StatMongoMapper
  extends MapperImpl<Stat, StatMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('supply', { 
      key: 'supply', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('maxSupply', { 
      key: 'max_supply', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('issuer', { 
      key: 'issuer', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('transferLocked', { 
      key: 'transfer_locked', 
      mapper: (value: boolean) => value,
    });

  }

  public toEntity(mongoModel: StatMongoModel): Stat {
    const { 
      supply,
      max_supply,
      issuer,
      transfer_locked,
      _id, 
      ...rest
    } = mongoModel;

    return Stat.create(
      new AssetMongoMapper().toEntity(supply),
      new AssetMongoMapper().toEntity(max_supply),
      issuer || '',
      transfer_locked || false,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class StatRawMapper
  extends MapperImpl<Stat, StatRawModel>
{
  public fromEntity(entity: Stat): StatRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: StatRawModel): Stat {
    const { 
      supply,
      max_supply,
      issuer,
      transfer_locked,
      ...rest
    } = rawModel;

    return Stat.create(
      new AssetRawMapper().toEntity(supply),
      new AssetRawMapper().toEntity(max_supply),
      issuer || '',
      transfer_locked || false,
      undefined,
      rest
    );
  }
}

