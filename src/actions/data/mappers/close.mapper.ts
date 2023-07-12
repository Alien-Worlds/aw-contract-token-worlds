/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Symbol, SymbolMongoMapper, SymbolRawMapper } from '@alien-worlds/eosio-contract-types';
import { Close  } from "../../domain/entities";
import { CloseMongoModel, CloseRawModel  } from "../dtos/close.dto";

// Mongo Mappers
export class CloseMongoMapper
  extends MapperImpl<Close, CloseMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('owner', { 
      key: 'owner', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('symbol', { 
      key: 'symbol', 
      mapper: (value: Symbol) => new SymbolMongoMapper().fromEntity(value),
    });

  }

  public toEntity(mongoModel: CloseMongoModel): Close {
    const { 
      owner,
      symbol,
      _id, 
      ...rest
    } = mongoModel;

    return Close.create(
      owner || '',
      new SymbolMongoMapper().toEntity(symbol),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CloseRawMapper
  extends MapperImpl<Close, CloseRawModel>
{
  public fromEntity(entity: Close): CloseRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CloseRawModel): Close {
    const { 
      owner,
      symbol,
      ...rest
    } = rawModel;

    return Close.create(
      owner || '',
      new SymbolRawMapper().toEntity(symbol),
      undefined,
      rest
    );
  }
}

