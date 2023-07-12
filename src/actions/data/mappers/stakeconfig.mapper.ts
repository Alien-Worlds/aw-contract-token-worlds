/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Symbol, SymbolMongoMapper, SymbolRawMapper } from '@alien-worlds/eosio-contract-types';
import { Stakeconfig,  StakeConfig  } from "../../domain/entities";
import { StakeconfigMongoModel, StakeconfigRawModel,  StakeConfigMongoModel, StakeConfigRawModel  } from "../dtos/stakeconfig.dto";

// Mongo Mappers
export class StakeconfigMongoMapper
  extends MapperImpl<Stakeconfig, StakeconfigMongoModel>
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
      new StakeConfigMongoMapper().toEntity(config),
      new SymbolMongoMapper().toEntity(token_symbol),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class StakeConfigMongoMapper
  extends MapperImpl<StakeConfig, StakeConfigMongoModel>
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
      new StakeConfigRawMapper().toEntity(config),
      new SymbolRawMapper().toEntity(token_symbol),
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

