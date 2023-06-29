/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:20 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Asset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Unlock` object.
 *
 * @class
 */
export class Unlock implements Entity {
  /**
   * Constructs a new instance of the `Unlock` class.
   *
   * @public
   * @constructor
   * @param Asset unlock
   * @param string [id]
   * @returns `Unlock` - An instance of the `Unlock` class.
   */
  public constructor(
    public unlock: Asset,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Unlock` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      unlock: this.unlock,
    };
  }

  /**
   * Creates an instance of the `Unlock` class.
   *
   * @static
   * @public
   * @returns `Unlock` An instance of the `Unlock` class.
   */
  public static create(
    unlock: Asset,
    id?: string,
    rest?: UnknownObject
  ): Unlock {
    const entity = new Unlock(
      unlock,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Unlock {
    return new Unlock(
      Asset.getDefault(),
    );
  }
}

