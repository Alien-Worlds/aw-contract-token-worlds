/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Stakeconfig  } from "../../domain/entities";
import { StakeconfigMongoModel, StakeconfigRawModel  } from "../dtos/stakeconfig.dto";

// Mongo Mappers
export class StakeconfigMongoMapper
  extends MongoMapper<Stakeconfig, StakeconfigMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('enabled', { 
      key: 'enabled', 
      mapper: (value: boolean) => value,
    });

    this.mappingFromEntity.set('minStakeTime', { 
      key: 'min_stake_time', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('maxStakeTime', { 
      key: 'max_stake_time', 
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: StakeconfigMongoModel): Stakeconfig {
    const { 
      enabled,
      min_stake_time,
      max_stake_time,
      _id,
      ...rest
    } = mongoModel;

    return Stakeconfig.create(
      enabled || false,
      min_stake_time || 0,
      max_stake_time || 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class StakeconfigRawMapper
  extends MapperImpl<Stakeconfig, StakeconfigRawModel>
{
  public fromEntity(entity: Stakeconfig): StakeconfigRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: StakeconfigRawModel): Stakeconfig {
    const { 
      enabled,
      min_stake_time,
      max_stake_time,
      ...rest
    } = rawModel;

    return Stakeconfig.create(
      enabled || false,
      min_stake_time || 0,
      max_stake_time || 0,
      undefined,
      rest
    );
  }
}

