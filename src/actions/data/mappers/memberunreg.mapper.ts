/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Memberunreg  } from "../../domain/entities";
import { MemberunregMongoModel, MemberunregRawModel  } from "../dtos/memberunreg.dto";

// Mongo Mappers
export class MemberunregMongoMapper
  extends MongoMapper<Memberunreg, MemberunregMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('sender', { 
      key: 'sender', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: MemberunregMongoModel): Memberunreg {
    const { 
      sender,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Memberunreg.create(
      sender || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class MemberunregRawMapper
  extends MapperImpl<Memberunreg, MemberunregRawModel>
{
  public fromEntity(entity: Memberunreg): MemberunregRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: MemberunregRawModel): Memberunreg {
    const { 
      sender,
      dac_id,
      ...rest
    } = rawModel;

    return Memberunreg.create(
      sender || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

