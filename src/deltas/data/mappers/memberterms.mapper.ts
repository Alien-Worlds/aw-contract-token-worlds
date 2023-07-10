/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 07:20:11 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Memberterms  } from "../../domain/entities";
import { MembertermsMongoModel, MembertermsRawModel  } from "../dtos/memberterms.dto";

// Mongo Mappers
export class MembertermsMongoMapper
  extends MapperImpl<Memberterms, MembertermsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('terms', { 
      key: 'terms', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('hash', { 
      key: 'hash', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('version', { 
      key: 'version', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
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
        terms ?? '',
        hash ?? '',
        version.toBigInt() ?? 0n,
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
        terms ?? '',
        hash ?? '',
      parseToBigInt(version ?? 0n),
      undefined,
      rest
    );
  }
}

