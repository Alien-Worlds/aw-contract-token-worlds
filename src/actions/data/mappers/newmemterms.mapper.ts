/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Newmemterms  } from "../../domain/entities";
import { NewmemtermsMongoModel, NewmemtermsRawModel  } from "../dtos/newmemterms.dto";

// Mongo Mappers
export class NewmemtermsMongoMapper
  extends MongoMapper<Newmemterms, NewmemtermsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('terms', { 
      key: 'terms', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('hash', { 
      key: 'hash', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: NewmemtermsMongoModel): Newmemterms {
    const { 
      terms,
      hash,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Newmemterms.create(
      terms || '',
      hash || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class NewmemtermsRawMapper
  extends MapperImpl<Newmemterms, NewmemtermsRawModel>
{
  public fromEntity(entity: Newmemterms): NewmemtermsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: NewmemtermsRawModel): Newmemterms {
    const { 
      terms,
      hash,
      dac_id,
      ...rest
    } = rawModel;

    return Newmemterms.create(
      terms || '',
      hash || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

