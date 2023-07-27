/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Members  } from "../../domain/entities";
import { MembersMongoModel, MembersRawModel  } from "../dtos/members.dto";

// Mongo Mappers
export class MembersMongoMapper
  extends MongoMapper<Members, MembersMongoModel>
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

