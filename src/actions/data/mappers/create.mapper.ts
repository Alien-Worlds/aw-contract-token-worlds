/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Create  } from "../../domain/entities";
import { CreateMongoModel, CreateRawModel  } from "../dtos/create.dto";

// Mongo Mappers
export class CreateMongoMapper
  extends MapperImpl<Create, CreateMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('issuer', { 
      key: 'issuer', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('maximumSupply', { 
      key: 'maximum_supply', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('transferLocked', { 
      key: 'transfer_locked', 
      mapper: (value: boolean) => value,
    });

  }

  public toEntity(mongoModel: CreateMongoModel): Create {
    const { 
      issuer,
      maximum_supply,
      transfer_locked,
      _id, 
      ...rest
    } = mongoModel;

    return Create.create(
      issuer || '',
      new AssetMongoMapper().toEntity(maximum_supply),
      transfer_locked || false,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CreateRawMapper
  extends MapperImpl<Create, CreateRawModel>
{
  public fromEntity(entity: Create): CreateRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CreateRawModel): Create {
    const { 
      issuer,
      maximum_supply,
      transfer_locked,
      ...rest
    } = rawModel;

    return Create.create(
      issuer || '',
      new AssetRawMapper().toEntity(maximum_supply),
      transfer_locked || false,
      undefined,
      rest
    );
  }
}

