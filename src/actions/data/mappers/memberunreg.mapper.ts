/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:49:54 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Memberunreg  } from "../../domain/entities";
import { MemberunregMongoModel, MemberunregRawModel  } from "../dtos/memberunreg.dto";

// Mongo Mappers
export class MemberunregMongoMapper
  extends MapperImpl<Memberunreg, MemberunregMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('sender', { 
      key: 'sender', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
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
        sender ?? '',
        dac_id ?? '',
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
        sender ?? '',
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

