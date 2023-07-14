/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:17:23 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Symbol, SymbolMongoMapper, SymbolRawMapper } from '@alien-worlds/eosio-contract-types';
import { Claimunstkes  } from "../../domain/entities";
import { ClaimunstkesMongoModel, ClaimunstkesRawModel  } from "../dtos/claimunstkes.dto";

// Mongo Mappers
export class ClaimunstkesMongoMapper
  extends MongoMapper<Claimunstkes, ClaimunstkesMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('tokenSymbol', { 
      key: 'token_symbol', 
      mapper: (value: Symbol) => new SymbolMongoMapper().fromEntity(value),
    });

  }

  public toEntity(mongoModel: ClaimunstkesMongoModel): Claimunstkes {
    const { 
      account,
      token_symbol,
      _id,
      ...rest
    } = mongoModel;

    return Claimunstkes.create(
      account || '',
      token_symbol ? new SymbolMongoMapper().toEntity(token_symbol) : Symbol.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ClaimunstkesRawMapper
  extends MapperImpl<Claimunstkes, ClaimunstkesRawModel>
{
  public fromEntity(entity: Claimunstkes): ClaimunstkesRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ClaimunstkesRawModel): Claimunstkes {
    const { 
      account,
      token_symbol,
      ...rest
    } = rawModel;

    return Claimunstkes.create(
      account || '',
      token_symbol ? new SymbolRawMapper().toEntity(token_symbol) : Symbol.getDefault(),
      undefined,
      rest
    );
  }
}

