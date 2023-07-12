/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

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
   * @param boolean enabled
   * @param number minStakeTime
   * @param number maxStakeTime
   * @param string [id]
   * @returns `Stakeconfig` - An instance of the `Stakeconfig` class.
   */
  public constructor(
    public enabled: boolean,
    public minStakeTime: number,
    public maxStakeTime: number,
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
      enabled: this.enabled,
      minStakeTime: this.minStakeTime,
      maxStakeTime: this.maxStakeTime,
    };
  }

  /**
   * Creates an instance of the `Stakeconfig` class.
   *
   * @static
   * @public
   * @param boolean enabled
   * @param number minStakeTime
   * @param number maxStakeTime
   * @returns `Stakeconfig` An instance of the `Stakeconfig` class.
   */
  public static create(
    enabled: boolean,
    minStakeTime: number,
    maxStakeTime: number,
    id?: string,
    rest?: UnknownObject
  ): Stakeconfig {
    const entity = new Stakeconfig(
      enabled,
      minStakeTime,
      maxStakeTime,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Stakeconfig {
    return new Stakeconfig(
      false,
      0,
      0,
    );
  }
}

