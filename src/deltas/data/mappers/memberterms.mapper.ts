/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Memberterms  } from "../../domain/entities";
import { MembertermsMongoModel, MembertermsRawModel  } from "../dtos/memberterms.dto";

// Mongo Mappers
export class MembertermsMongoMapper
  extends MongoMapper<Memberterms, MembertermsMongoModel>
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

    this.mappingFromEntity.set('version', { 
      key: 'version', 
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: MembertermsMongoModel): Memberterms {
    const { 
      terms,
      hash,
      version,
      _id,
      ...rest
    } = mongoModel;

    return Memberterms.create(
      terms || '',
      hash || '',
      version || 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class MembertermsRawMapper
  extends MapperImpl<Memberterms, MembertermsRawModel>
{
  public fromEntity(entity: Memberterms): MembertermsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: MembertermsRawModel): Memberterms {
    const { 
      terms,
      hash,
      version,
      ...rest
    } = rawModel;

    return Memberterms.create(
      terms || '',
      hash || '',
      version || 0,
      undefined,
      rest
    );
  }
}

