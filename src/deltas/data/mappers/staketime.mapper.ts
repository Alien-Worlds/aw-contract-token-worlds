/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:59:47 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Staketime  } from "../../domain/entities";
import { StaketimeMongoModel, StaketimeRawModel  } from "../dtos/staketime.dto";

// Mongo Mappers
export class StaketimeMongoMapper
  extends MongoMapper<Staketime, StaketimeMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('delay', { 
      key: 'delay', 
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: StaketimeMongoModel): Staketime {
    const { 
      account,
      delay,
      _id,
      ...rest
    } = mongoModel;

    return Staketime.create(
      account || '',
      delay || 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class StaketimeRawMapper
  extends MapperImpl<Staketime, StaketimeRawModel>
{
  public fromEntity(entity: Staketime): StaketimeRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: StaketimeRawModel): Staketime {
    const { 
      account,
      delay,
      ...rest
    } = rawModel;

    return Staketime.create(
      account || '',
      delay || 0,
      undefined,
      rest
    );
  }
}

