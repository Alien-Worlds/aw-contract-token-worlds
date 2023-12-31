/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { Asset } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Unstake` object.
 *
 * @class
 */
export class Unstake implements Entity {
  /**
   * Constructs a new instance of the `Unstake` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param Asset quantity
   * @param string [id]
   * @returns `Unstake` - An instance of the `Unstake` class.
   */
  public constructor(
    public account: string,
    public quantity: Asset,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Unstake` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
      quantity: this.quantity,
    };
  }

  /**
   * Creates an instance of the `Unstake` class.
   *
   * @static
   * @public
   * @param string account
   * @param Asset quantity
   * @returns `Unstake` An instance of the `Unstake` class.
   */
  public static create(
    account: string,
    quantity: Asset,
    id?: string,
    rest?: UnknownObject
  ): Unstake {
    const entity = new Unstake(
      account,
      quantity,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Unstake {
    return new Unstake(
      '',
      Asset.getDefault(),
    );
  }
}

