/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:49:54 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Symbol } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Stakeconfig` object.
 *
 * @class
 */
export class Stakeconfig implements Entity {
  /**
   * Constructs a new instance of the `Stakeconfig` class.
   *
   * @public
   * @constructor
   * @param StakeConfig config
   * @param Symbol tokenSymbol
   * @param string [id]
   * @returns `Stakeconfig` - An instance of the `Stakeconfig` class.
   */
  public constructor(
    public config: StakeConfig,
    public tokenSymbol: Symbol,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Stakeconfig` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      config: this.config,
      tokenSymbol: this.tokenSymbol,
    };
  }

  /**
   * Creates an instance of the `Stakeconfig` class.
   *
   * @static
   * @public
   * @returns `Stakeconfig` An instance of the `Stakeconfig` class.
   */
  public static create(
    config: StakeConfig,
    tokenSymbol: Symbol,
    id?: string,
    rest?: UnknownObject
  ): Stakeconfig {
    const entity = new Stakeconfig(
      config,
      tokenSymbol,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Stakeconfig {
    return new Stakeconfig(
      StakeConfig.getDefault(),
      Symbol.getDefault(),
    );
  }
}

/**
 * Represents a `StakeConfig` object.
 *
 * @class
 */
export class StakeConfig implements Entity {
  /**
   * Constructs a new instance of the `StakeConfig` class.
   *
   * @public
   * @constructor
   * @param boolean enabled
   * @param number minStakeTime
   * @param number maxStakeTime
   * @param string [id]
   * @returns `StakeConfig` - An instance of the `StakeConfig` class.
   */
  public constructor(
    public enabled: boolean,
    public minStakeTime: number,
    public maxStakeTime: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `StakeConfig` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      enabled: this.enabled,
      minStakeTime: this.minStakeTime,
      maxStakeTime: this.maxStakeTime,
    };
  }

  /**
   * Creates an instance of the `StakeConfig` class.
   *
   * @static
   * @public
   * @returns `StakeConfig` An instance of the `StakeConfig` class.
   */
  public static create(
    enabled: boolean,
    minStakeTime: number,
    maxStakeTime: number,
    id?: string,
    rest?: UnknownObject
  ): StakeConfig {
    const entity = new StakeConfig(
      enabled,
      minStakeTime,
      maxStakeTime,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): StakeConfig {
    return new StakeConfig(
      false,
      0,
      0,
    );
  }
}

