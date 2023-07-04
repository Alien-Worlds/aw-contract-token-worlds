/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:49:54 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Symbol, SymbolMongoMapper, SymbolRawMapper } from '@alien-worlds/eosio-contract-types';
import { Cancel  } from "../../domain/entities";
import { CancelMongoModel, CancelRawModel  } from "../dtos/cancel.dto";

// Mongo Mappers
export class CancelMongoMapper
  extends MapperImpl<Cancel, CancelMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('unstakeId', { 
      key: 'unstake_id', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

    this.mappingFromEntity.set('tokenSymbol', { 
      key: 'token_symbol', 
      mapper: (value: Symbol) => 
           new SymbolMongoMapper().fromEntity(value)
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
        unstake_id.toBigInt() ?? 0n,
        token_symbol 
          ? new SymbolMongoMapper().toEntity(token_symbol)
          : Symbol.getDefault(),
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
      parseToBigInt(unstake_id ?? 0n),
        token_symbol 
          ? new SymbolRawMapper().toEntity(token_symbol)
          : Symbol.getDefault(),
      undefined,
      rest
    );
  }
}

