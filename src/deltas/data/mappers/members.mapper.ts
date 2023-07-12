/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
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
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('agreedtermsversion', { 
      key: 'agreedtermsversion', 
      mapper: (value: number) => value,
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
      sender || '',
      agreedtermsversion || 0,
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
      sender || '',
      agreedtermsversion || 0,
      undefined,
      rest
    );
  }
}

