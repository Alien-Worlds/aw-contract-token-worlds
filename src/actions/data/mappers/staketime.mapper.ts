/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Symbol, SymbolMongoMapper, SymbolRawMapper } from '@alien-worlds/aw-antelope';
import { Staketime  } from "../../domain/entities";
import { StaketimeMongoModel, StaketimeRawModel  } from "../dtos/staketime.dto";

// Mongo Mappers
export class StaketimeMongoMapper
  extends MongoMapper<Staketime, StaketimeMongoModel>
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
      token_symbol ? new SymbolMongoMapper().toEntity(token_symbol) : Symbol.getDefault(),
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
      token_symbol ? new SymbolRawMapper().toEntity(token_symbol) : Symbol.getDefault(),
      undefined,
      rest
    );
  }
}

