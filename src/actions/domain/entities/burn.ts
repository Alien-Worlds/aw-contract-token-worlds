/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { Asset } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Burn` object.
 *
 * @class
 */
export class Burn implements Entity {
  /**
   * Constructs a new instance of the `Burn` class.
   *
   * @public
   * @constructor
   * @param string from
   * @param Asset quantity
   * @param string [id]
   * @returns `Burn` - An instance of the `Burn` class.
   */
  public constructor(
    public from: string,
    public quantity: Asset,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Burn` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      from: this.from,
      quantity: this.quantity,
    };
  }

  /**
   * Creates an instance of the `Burn` class.
   *
   * @static
   * @public
   * @param string from
   * @param Asset quantity
   * @returns `Burn` An instance of the `Burn` class.
   */
  public static create(
    from: string,
    quantity: Asset,
    id?: string,
    rest?: UnknownObject
  ): Burn {
    const entity = new Burn(
      from,
      quantity,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Burn {
    return new Burn(
      '',
      Asset.getDefault(),
    );
  }
}

