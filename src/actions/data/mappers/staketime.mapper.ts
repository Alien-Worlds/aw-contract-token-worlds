/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Symbol, SymbolMongoMapper, SymbolRawMapper } from '@alien-worlds/eosio-contract-types';
import { Staketime  } from "../../domain/entities";
import { StaketimeMongoModel, StaketimeRawModel  } from "../dtos/staketime.dto";

// Mongo Mappers
export class StaketimeMongoMapper
  extends MapperImpl<Staketime, StaketimeMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('unstakeTime', { 
      key: 'unstake_time', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('tokenSymbol', { 
      key: 'token_symbol', 
      mapper: (value: Symbol) => new SymbolMongoMapper().fromEntity(value),
    });

  }

  public toEntity(mongoModel: StaketimeMongoModel): Staketime {
    const { 
      account,
      unstake_time,
      token_symbol,
      _id, 
      ...rest
    } = mongoModel;

    return Staketime.create(
      account || '',
      unstake_time || 0,
      new SymbolMongoMapper().toEntity(token_symbol),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class StaketimeRawMapper
  extends MapperImpl<Staketime, StaketimeRawModel>
{
  public fromEntity(entity: Staketime): StaketimeRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: StaketimeRawModel): Staketime {
    const { 
      account,
      unstake_time,
      token_symbol,
      ...rest
    } = rawModel;

    return Staketime.create(
      account || '',
      unstake_time || 0,
      new SymbolRawMapper().toEntity(token_symbol),
      undefined,
      rest
    );
  }
}

