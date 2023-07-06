/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:52:27 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Memberreg  } from "../../domain/entities";
import { MemberregMongoModel, MemberregRawModel  } from "../dtos/memberreg.dto";

// Mongo Mappers
export class MemberregMongoMapper
  extends MapperImpl<Memberreg, MemberregMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('sender', { 
      key: 'sender', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('agreedterms', { 
      key: 'agreedterms', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: MemberregMongoModel): Memberreg {
    const { 
      sender,
      agreedterms,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Memberreg.create(
        sender ?? '',
        agreedterms ?? '',
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class MemberregRawMapper
  extends MapperImpl<Memberreg, MemberregRawModel>
{
  public fromEntity(entity: Memberreg): MemberregRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: MemberregRawModel): Memberreg {
    const { 
      sender,
      agreedterms,
      dac_id,
      ...rest
    } = rawModel;

    return Memberreg.create(
        sender ?? '',
        agreedterms ?? '',
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

