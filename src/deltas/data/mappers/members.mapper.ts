/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:52:27 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Members  } from "../../domain/entities";
import { MembersMongoModel, MembersRawModel  } from "../dtos/members.dto";

// Mongo Mappers
export class MembersMongoMapper
  extends MapperImpl<Members, MembersMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('sender', { 
      key: 'sender', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('agreedtermsversion', { 
      key: 'agreedtermsversion', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

  }

  public toEntity(mongoModel: MembersMongoModel): Members {
    const { 
      sender,
      agreedtermsversion,
      _id, 
      ...rest
    } = mongoModel;

    return Members.create(
        sender ?? '',
        agreedtermsversion.toBigInt() ?? 0n,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class MembersRawMapper
  extends MapperImpl<Members, MembersRawModel>
{
  public fromEntity(entity: Members): MembersRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: MembersRawModel): Members {
    const { 
      sender,
      agreedtermsversion,
      ...rest
    } = rawModel;

    return Members.create(
        sender ?? '',
      parseToBigInt(agreedtermsversion ?? 0n),
      undefined,
      rest
    );
  }
}

