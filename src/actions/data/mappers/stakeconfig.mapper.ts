/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Symbol, SymbolMongoMapper, SymbolRawMapper } from '@alien-worlds/aw-antelope';
import { Stakeconfig,  StakeConfig  } from "../../domain/entities";
import { StakeconfigMongoModel, StakeconfigRawModel,  StakeConfigMongoModel, StakeConfigRawModel  } from "../dtos/stakeconfig.dto";

// Mongo Mappers
export class StakeconfigMongoMapper
  extends MongoMapper<Stakeconfig, StakeconfigMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('config', { 
      key: 'config', 
      mapper: (value: StakeConfig) => new StakeConfigMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('tokenSymbol', { 
      key: 'token_symbol', 
      mapper: (value: Symbol) => new SymbolMongoMapper().fromEntity(value),
    });

  }

  public toEntity(mongoModel: StakeconfigMongoModel): Stakeconfig {
    const { 
      config,
      token_symbol,
      _id,
      ...rest
    } = mongoModel;

    return Stakeconfig.create(
      config ? new StakeConfigMongoMapper().toEntity(config) : StakeConfig.getDefault(),
      token_symbol ? new SymbolMongoMapper().toEntity(token_symbol) : Symbol.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class StakeConfigMongoMapper
  extends MongoMapper<StakeConfig, StakeConfigMongoModel>
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

  public toEntity(mongoModel: StakeConfigMongoModel): StakeConfig {
    const { 
      enabled,
      min_stake_time,
      max_stake_time,
      _id,
      ...rest
    } = mongoModel;

    return StakeConfig.create(
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
      config,
      token_symbol,
      ...rest
    } = rawModel;

    return Stakeconfig.create(
      config ? new StakeConfigRawMapper().toEntity(config) : StakeConfig.getDefault(),
      token_symbol ? new SymbolRawMapper().toEntity(token_symbol) : Symbol.getDefault(),
      undefined,
      rest
    );
  }
}

export class StakeConfigRawMapper
  extends MapperImpl<StakeConfig, StakeConfigRawModel>
{
  public fromEntity(entity: StakeConfig): StakeConfigRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: StakeConfigRawModel): StakeConfig {
    const { 
      enabled,
      min_stake_time,
      max_stake_time,
      ...rest
    } = rawModel;

    return StakeConfig.create(
      enabled || false,
      min_stake_time || 0,
      max_stake_time || 0,
      undefined,
      rest
    );
  }
}

