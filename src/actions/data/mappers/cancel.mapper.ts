/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Symbol, SymbolMongoMapper, SymbolRawMapper } from '@alien-worlds/aw-antelope';
import { Cancel  } from "../../domain/entities";
import { CancelMongoModel, CancelRawModel  } from "../dtos/cancel.dto";

// Mongo Mappers
export class CancelMongoMapper
  extends MongoMapper<Cancel, CancelMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('unstakeId', { 
      key: 'unstake_id', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('tokenSymbol', { 
      key: 'token_symbol', 
      mapper: (value: Symbol) => new SymbolMongoMapper().fromEntity(value),
    });

  }

  public toEntity(mongoModel: CancelMongoModel): Cancel {
    const { 
      unstake_id,
      token_symbol,
      _id,
      ...rest
    } = mongoModel;

    return Cancel.create(
      unstake_id || 0,
      token_symbol ? new SymbolMongoMapper().toEntity(token_symbol) : Symbol.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CancelRawMapper
  extends MapperImpl<Cancel, CancelRawModel>
{
  public fromEntity(entity: Cancel): CancelRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CancelRawModel): Cancel {
    const { 
      unstake_id,
      token_symbol,
      ...rest
    } = rawModel;

    return Cancel.create(
      unstake_id || 0,
      token_symbol ? new SymbolRawMapper().toEntity(token_symbol) : Symbol.getDefault(),
      undefined,
      rest
    );
  }
}

