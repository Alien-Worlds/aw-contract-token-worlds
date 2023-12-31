/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { Asset } from '@alien-worlds/aw-antelope';

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
   * @param Asset unlock
   * @returns `Unlock` An instance of the `Unlock` class.
   */
  public static create(
    unlock: Asset,
    id?: string,
    rest?: UnknownObject
  ): Unlock {
    const entity = new Unlock(
      unlock,
      id,
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

